import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { SITE_CONFIG, PROJECTS } from "../constants";

let chatSession: Chat | null = null;

const getGeminiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("Gemini API Key is missing. AI features will be disabled.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for ${SITE_CONFIG.name}'s portfolio website. 
Your persona is creative, minimalist, and professional, mirroring the site's aesthetic.
You are helpful and concise.

Here is context about the owner:
Name: ${SITE_CONFIG.name}
Tagline: ${SITE_CONFIG.tagline}
Bio: ${SITE_CONFIG.bio}
Contact: ${SITE_CONFIG.email}

Here is a list of their recent projects:
${PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}`).join('\n')}

If asked about hiring, direct them to the email.
If asked about specific technologies, assume a stack of React, TypeScript, and Tailwind unless the project implies otherwise.
Do not hallucinate personal details not provided here.
`;

export const initializeChat = async (): Promise<string> => {
  const ai = getGeminiClient();
  if (!ai) return "AI unavailable";

  try {
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
    return "ready";
  } catch (error) {
    console.error("Failed to init chat", error);
    return "error";
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    // Attempt re-init if null, otherwise fail
    const status = await initializeChat();
    if (status !== "ready" || !chatSession) {
      return "I'm currently offline (API configuration missing). Please email me instead.";
    }
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I seem to be having trouble connecting to my creative brain right now.";
  }
};
