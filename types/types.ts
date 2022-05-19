import { ReactNode } from 'react';

export type Filter = 'All' | 'Enhancement' | 'UI' | 'UX' | 'Bug' | 'Feature';
export type SortBy = 'Most Upvotes' | 'Least Upvotes' | 'Least Comments' | 'Most Comments';
export type PropsChildren = {
  children: ReactNode;
};
