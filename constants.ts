import { Project } from './types';

// ==========================================
// SITE MANIFEST & CONFIGURATION
// Manage your content here.
// ==========================================

export const SITE_CONFIG = {
  name: "TYKOE",
  tagline: "Digital Craftsman & Visual Artist",
  bio: "I create meaningful digital experiences that blend aesthetics with functionality. Based in the cloud, working worldwide.",
  email: "xtkoeller@gmail.com",
  // Update this text to change the "Phone Booth" contact message
  contactMessage: "Signal frequency open. Awaiting data transmission for new collaborations and visual assignments."
};

// ==========================================
// PORTFOLIO PROJECTS
// To add a project:
// 1. Upload image to your assets folder
// 2. Add an entry below with the path
// ==========================================
export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Neon Horizons',
    category: 'Photography',
    // Use relative paths if you have local images, e.g., '/assets/neon.jpg'
    imageUrl: 'https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif', // Working Cyberpunk Loop
    description: 'A study of light and shadow in urban environments, captured in motion.'
  },
  {
    id: '2',
    title: 'Abstract Form',
    category: '3D Design',
    imageUrl: 'https://picsum.photos/600/800?random=2',
    description: 'Procedural generation experiments using Blender and Python.'
  },
  {
    id: '3',
    title: 'Minimalist UI',
    category: 'Web Design',
    imageUrl: 'https://picsum.photos/800/800?random=3',
    description: 'A clean, typography-focused interface for a fintech startup.'
  },
  {
    id: '4',
    title: 'Analog Memories',
    category: 'Film',
    imageUrl: 'https://picsum.photos/700/500?random=4',
    description: '35mm film photography from a summer in Tokyo.'
  },
  {
    id: '5',
    title: 'Echoes',
    category: 'Branding',
    imageUrl: 'https://picsum.photos/600/600?random=5',
    description: 'Identity design for a modern music festival.'
  },
  {
    id: '6',
    title: 'Void',
    category: 'Art Direction',
    imageUrl: 'https://picsum.photos/500/700?random=6',
    description: 'Editorial layout and concept for Void Magazine.'
  }
];