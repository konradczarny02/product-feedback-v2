import { ReactNode } from 'react';

export type SortBy = 'Most Upvotes' | 'Least Upvotes' | 'Least Comments' | 'Most Comments';
export type PropsChildren = {
  children: ReactNode;
};

export type Category = 'Bug' | 'Enhancement' | 'UX' | 'UI' | 'Feature';
export type Filter = 'Bug' | 'Enhancement' | 'UX' | 'UI' | 'Feature' | 'All';

export type Status = 'Planned' | 'In-Progress' | 'Live';

export interface suggestionResponse {
  id: number;
  updateAt: Date;
  createdAt: Date;
  details: string;
  title: string;
  category: Category;
  status: Status;
  upvotes: any[];
  comments?: any[];
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}

export interface Comment {
  id: number;
  parentId?: number;
  content: string;
  user?: User;
  suggestion?: suggestionResponse;
  suggestionId: number;
  userId: number;
}

export type StatusDescription = 'Features currently being developed' | 'Ideas prioritized for research' | 'Released features';
