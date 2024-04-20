import { ElementType } from 'react';

export interface IFeaturedWork {
  id: number;
  title: string;
  projectSkills: string[];
  thumbnail: string;
  icon: ElementType;
}
