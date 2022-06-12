import { ReactNode } from 'react';

export type SortBy = 'Most Upvotes' | 'Least Upvotes' | 'Least Comments' | 'Most Comments';

export type PropsChildren = {
  children: ReactNode;
};

export type Category = 'Bug' | 'Enhancement' | 'UX' | 'UI' | 'Feature';
export type Filter = 'Bug' | 'Enhancement' | 'UX' | 'UI' | 'Feature' | 'All';

export type Status = 'Planned' | 'In-Progress' | 'Live';

export interface IUser {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
  password?: string;
  email?: string;
  firstName: string;
  lastName: string;
  userName: string;
}

export interface IUpvote {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  userId: number;
  suggestionId: number;
}

export interface IComment {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  parentId?: number;
  content: string;
  suggestionId: number;
  userId: number;
}

export interface ISuggestionResponse {
  id: number;
  updateAt: Date;
  createdAt: Date;
  details: string;
  title: string;
  category: Category;
  status: Status;
  upvotes?: IUpvote[];
  comments?: IComment[];
}

export interface ICommentWithUser extends IComment {
  user: IUser;
}

export type StatusDescription = 'Features currently being developed' | 'Ideas prioritized for research' | 'Released features';
