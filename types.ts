export interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  link?: string;
}

export enum ChatSender {
  USER = 'user',
  AI = 'ai'
}

export interface ChatMessage {
  id: string;
  text: string;
  sender: ChatSender;
  timestamp: number;
}