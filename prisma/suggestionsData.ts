import { Category, Status } from '../types/types';

type User = {
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
};

type SuggestionType = {
  title: string;
  details: string;
  category: Category;
  upvotes: number;
  comments: any[];
  status: Status;
  createdBy?: User;
};

export const suggestions: SuggestionType[] = [
  {
    title: 'Add tags for solutions',
    details: 'Easier to search for solutions based on a specific stack.',
    category: 'Enhancement',
    upvotes: 112,
    comments: [],
    status: 'Planned',
  },
  {
    title: 'Add a dark theme option',
    details: 'It would help people with light sensitivities and who prefer dark mode.',
    category: 'Feature',
    upvotes: 99,
    comments: [],
    status: 'Planned',
  },
  {
    title: 'Q&A within the challenge hubs',
    details: 'Challenge-specific Q&A would make for easy reference.',
    category: 'Feature',
    upvotes: 65,
    comments: [],
    status: 'In-Progress',
  },
  {
    title: 'Allow image/video upload',
    details: 'Images and screencasts can enhance comments on solutions.',
    category: 'Enhancement',
    upvotes: 51,
    comments: [],
    status: 'In-Progress',
  },
  {
    title: 'Ability to follow others',
    details: 'Stay updated on comments and solutions other people post.',
    category: 'Feature',
    upvotes: 42,
    comments: [],
    status: 'In-Progress',
  },
  {
    title: 'Preview images not loading',
    details: 'Challenge preview images are missing when you apply a filter.',
    category: 'Bug',
    upvotes: 3,
    comments: [],
    status: 'Live',
  },
];
