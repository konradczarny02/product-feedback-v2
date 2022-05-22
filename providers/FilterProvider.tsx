import { createContext, useState, ReactNode } from 'react';
import type { Filter } from '../types/types';

interface ContextInterface {
  filter: Filter;
  handleFilterChange: (value: Filter) => void;
}

export const FilterContext = createContext<ContextInterface>({ filter: 'All', handleFilterChange: () => {} });

const FilterProvider = ({ children }: { children: ReactNode }) => {
  const [filter, setFilter] = useState<Filter>('All');
  const handleFilterChange = (value: Filter) => {
    setFilter(value);
  };

  return <FilterContext.Provider value={{ filter, handleFilterChange }}>{children}</FilterContext.Provider>;
};

export default FilterProvider;
