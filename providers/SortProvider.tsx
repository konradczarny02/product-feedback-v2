import { createContext, useState, ReactNode } from 'react';
import type { SortBy } from '../types/types';

interface ContextInterface {
  sortBy: SortBy;
  handleSortChange: (value: SortBy) => void;
}

export const SortContext = createContext<ContextInterface>({ sortBy: 'Most Upvotes', handleSortChange: () => {} });

const SortProvider = ({ children }: { children: ReactNode }) => {
  const [sortBy, setSortBy] = useState<SortBy>('Most Upvotes');
  const handleSortChange = (value: SortBy) => {
    setSortBy(value);
  };

  return <SortContext.Provider value={{ sortBy, handleSortChange }}>{children}</SortContext.Provider>;
};

export default SortProvider;
