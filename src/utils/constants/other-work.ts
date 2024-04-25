import FigmaIcon from '@/assets/icons/figma-icon';
import { IOtherWork } from '../types/types';
import PhotoshopIcon from '@/assets/icons/photoshop-icon';
import IlustratorIcon from '@/assets/icons/ilustrator-icon';

export const otherWork: IOtherWork[] = [
  {
    id: 1,
    title: 'SFM - Funacja aktywnego rozwoju',
    description: 'sfmDescription',
    thumbnail: '/images/sfm-thumbnail.png',
    icons: [PhotoshopIcon, IlustratorIcon],
  },
  {
    id: 2,
    title: 'Stil life study',
    description: 'stillLifeStudyDescription1',
    thumbnail: '/images/still-life-study-thumbnail1.png',
  },
  {
    id: 3,
    title: 'Still life study',
    description: 'stillLifeStudyDescription2',
    thumbnail: '/images/still-life-study-thumbnail2.png',
  },
  {
    id: 4,
    title: 'Model study',
    description: 'modelStudyDescription',
    thumbnail: '/images/model-study-thumbnail.png',
  },
  {
    id: 5,
    title: 'Memento mori',
    description: 'mementoMoriDescription',
    thumbnail: '/images/memento-mori-thumbnail.png',
  },
  {
    id: 6,
    title: 'Dior HQ, Seoul',
    description: 'diorHqSeoulDescription',
    thumbnail: '/images/dior-hq-seoul-thumbnail.png',
  },
] as const;
