import { ElementType } from 'react';

export interface IFeaturedWork {
  id: number;
  title: string;
  projectSkills: string[];
  thumbnail: string;
  icon: ElementType;
}

export interface IOtherWork {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  icons?: ElementType[];
}
