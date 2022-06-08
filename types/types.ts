import { ReactNode } from 'react';

export type Filter = 'All' | 'Enhancement' | 'UI' | 'UX' | 'Bug' | 'Feature';
export type SortBy = 'Most Upvotes' | 'Least Upvotes' | 'Least Comments' | 'Most Comments';
export type PropsChildren = {
  children: ReactNode;
};

export type Category = 'Bug' | 'Enhancement' | 'UX' | 'UI' | 'Feature';

export type Status = 'Planned' | 'In-Progress' | 'Live';

export interface suggestionResponse {
  id: number;
  category: Category;
  createdAt: Date;
  details: string;
  title: string;
  updateAt: Date;
  upvotes: any[];
  status: Status;
  comments?: any[];
}

export type StatusDescription = 'Features currently being developed' | 'Ideas prioritized for research' | 'Released features';
