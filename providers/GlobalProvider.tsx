import { createContext, useState } from 'react';
import { Filter, PropsChildren, SortBy } from '../types/types';

type State = {
  filter: Filter;
  sortBy: SortBy;
};

type GlobalContext = {
  filter: Filter;
  sortBy: SortBy;
  handleFilterChange: (value: Filter) => void;
  handleSortChange: (value: SortBy) => void;
};

export const GlobalContext = createContext<GlobalContext>({
  filter: 'All',
  sortBy: 'Most Upvotes',
  handleSortChange: () => {},
  handleFilterChange: () => {},
});

const GlobalProvider = ({ children }: PropsChildren) => {
  const [filter, setFilter] = useState<Filter>('All');
  const [sortBy, setSortBy] = useState<SortBy>('Most Upvotes');
  const handleFilterChange = (value: Filter) => {
    setFilter(value);
  };
  const handleSortChange = (value: SortBy) => {
    setSortBy(value);
  };

  const value = { filter, sortBy, handleFilterChange, handleSortChange };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
