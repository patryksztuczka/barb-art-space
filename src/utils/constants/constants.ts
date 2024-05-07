import FigmaIcon from '@/assets/icons/figma-icon';
import { IFeaturedWork, IOtherWork } from '../types/types';
import PhotoshopIcon from '@/assets/icons/photoshop-icon';
import IlustratorIcon from '@/assets/icons/ilustrator-icon';

export const ROUTES = {
  home: '/',
  idNow: '/id-now',
  candid: '/candid',
  sunFestival: '/sun-festival',
  lGeniusz: '/lgeniusz',
  endorfina: '/endorfina',
  workSection: '/#work',
  aboutSection: '/#about',
} as const;

export const featuredWork: IFeaturedWork[] = [
  {
    id: 1,
    title: 'idNow',
    projectSkills: ['userExperience', 'userInterface', 'graphicDesign'],
    thumbnail: '/images/featured-work/id-now/idnow-thumbnail.png',
    icon: FigmaIcon,
    route: ROUTES.idNow,
  },
  {
    id: 2,
    title: 'Candid',
    projectSkills: ['userInterface'],
    thumbnail: '/images/featured-work/candid/candid-thumbnail.png',
    icon: FigmaIcon,
    route: ROUTES.candid,
  },
  {
    id: 3,
    title: 'SUN Festival',
    projectSkills: ['collabUserInterface'],
    thumbnail: '/images/featured-work/sun-festival/sun-festival-thumbnail.png',
    icon: FigmaIcon,
    route: ROUTES.sunFestival,
  },
  {
    id: 4,
    title: 'ŁGeniusz - Indeks glikemiczny',
    projectSkills: ['collabUserInterface'],
    thumbnail: '/images/featured-work/lgeniusz/lgeniusz-thumbnail.png',
    icon: FigmaIcon,
    route: ROUTES.lGeniusz,
  },
  {
    id: 5,
    title: 'Endorfina by Kamila Wybrańczyk',
    projectSkills: ['userInterface'],
    thumbnail: '/images/featured-work/endorfina/endorfina-thumbnail.png',
    icon: FigmaIcon,
    route: ROUTES.endorfina,
  },
] as const;

export const otherWork: IOtherWork[] = [
  {
    id: 1,
    title: 'SFM - Funacja aktywnego rozwoju',
    description: 'sfmDescription',
    thumbnail: '/images/other-work/sfm-thumbnail.png',
    icons: [PhotoshopIcon, IlustratorIcon],
  },
  {
    id: 2,
    title: 'Notes from April',
    description: 'notesFromAprilDescription',
    thumbnail: '/images/other-work/notes-from-april-thumbnail.jpg',
  },
  {
    id: 3,
    title: 'Stil life study',
    description: 'stillLifeStudyDescription',
    thumbnail: '/images/other-work/still-life-study-thumbnail.png',
  },
  {
    id: 4,
    title: 'Model study',
    description: 'modelStudyDescription',
    thumbnail: '/images/other-work/model-study-thumbnail.png',
  },
  {
    id: 5,
    title: 'Memento mori',
    description: 'mementoMoriDescription',
    thumbnail: '/images/other-work/memento-mori-thumbnail.png',
  },
  {
    id: 6,
    title: 'Dior HQ, Seoul',
    description: 'diorHqSeoulDescription',
    thumbnail: '/images/other-work/dior-hq-seoul-thumbnail.png',
  },
] as const;

export const featuredWorkCaseStudy = [
  {
    id: 'sun-festival',
    title: 'SUN Festival',
    role: 'sunFestivalRole',
    projectOverview: 'sunFestivalProjectOverviewParagraph',
    images: [
      '/images/featured-work/sun-festival/sun-festival-thumbnail.png',
      '/images/featured-work/sun-festival/sun-festival-1.png',
    ],
  },
  {
    id: 'lgeniusz',
    title: 'LGeniusz',
    subtitle: 'lgeniuszSubtitle',
    role: 'lgeniuszRole',
    projectOverview: 'lgeniuszProjectOverviewParagraph',
    images: [
      '/images/featured-work/lgeniusz/lgeniusz-thumbnail.png',
      '/images/featured-work/lgeniusz/lgeniusz-1.png',
      '/images/featured-work/lgeniusz/lgeniusz-2.png',
      '/images/featured-work/lgeniusz/lgeniusz-3.png',
    ],
  },
  {
    id: 'endorfina',
    title: 'Endorfina',
    subtitle: 'endorfinaSubtitle',
    role: 'endorfinaRole',
    projectOverview: 'endorfinaProjectOverviewParagraph',
    images: [
      '/images/featured-work/endorfina/endorfina-1.png',
      '/images/featured-work/endorfina/endorfina-thumbnail.png',
    ],
  },
];
