import { IFeaturedWork } from '../types/types';
import FigmaIcon from '@/assets/icons/figma-icon';

export const featuredWork: IFeaturedWork[] = [
  {
    id: 1,
    title: 'idNow',
    projectSkills: ['userExperience', 'userInterface', 'graphicDesign'],
    thumbnail: '/images/idnow-thumbnail.png',
    icon: FigmaIcon,
  },
  {
    id: 2,
    title: 'Candid',
    projectSkills: ['userInterface'],
    thumbnail: '/images/candid-thumbnail.png',
    icon: FigmaIcon,
  },
  {
    id: 3,
    title: 'SUN Festival',
    projectSkills: ['collabUserInterface'],
    thumbnail: '/images/sun-festival-thumbnail.png',
    icon: FigmaIcon,
  },
  {
    id: 4,
    title: 'ŁGeniusz - Indeks glikemiczny',
    projectSkills: ['userInterface', 'collabUserExperience'],
    thumbnail: '/images/lgeniusz-thumbnail.png',
    icon: FigmaIcon,
  },
  {
    id: 5,
    title: 'Endorfina by Kamila Wybrańczyk',
    projectSkills: ['userInterface'],
    thumbnail: '/images/endorfina-thumbnail.png',
    icon: FigmaIcon,
  },
];
