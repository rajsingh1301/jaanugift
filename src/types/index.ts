/**
 * TypeScript interfaces for the Birthday Gift Website
 */

// Interface for story timeline items
export interface StoryItem {
  id: number;
  title: string;
  description: string;
  
  image?: string; // Optional: path to image file
}

// Interface for reasons why you love her
export interface ReasonItem {
  id: number;
  text: string;
}

// Interface for countdown timer state
export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isFinished: boolean;
}
