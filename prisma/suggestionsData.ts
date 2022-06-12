import { Category, Status } from '../types/types';

type SuggestionType = {
  title: string;
  details: string;
  category: Category;
  status: Status;
};

export const suggestions: SuggestionType[] = [
  {
    title: 'Add tags for solutions',
    details: 'Easier to search for solutions based on a specific stack.',
    category: 'Enhancement',
    status: 'Planned',
  },
  {
    title: 'Add a dark theme option',
    details: 'It would help people with light sensitivities and who prefer dark mode.',
    category: 'Feature',
    status: 'Planned',
  },
  {
    title: 'Q&A within the challenge hubs',
    details: 'Challenge-specific Q&A would make for easy reference.',
    category: 'Feature',
    status: 'In-Progress',
  },
  {
    title: 'Allow image/video upload',
    details: 'Images and screencasts can enhance comments on solutions.',
    category: 'Enhancement',
    status: 'In-Progress',
  },
  {
    title: 'Ability to follow others',
    details: 'Stay updated on comments and solutions other people post.',
    category: 'Feature',
    status: 'In-Progress',
  },
  {
    title: 'Preview images not loading',
    details: 'Challenge preview images are missing when you apply a filter.',
    category: 'Bug',
    status: 'Live',
  },
];
