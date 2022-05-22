import { FilterWrapper } from './Filter.styles';
import { Filter as FilterType } from '../../../types/types';
import { useContext } from 'react';
import { FilterContext } from '../../../providers/FilterProvider';

const Filter = ({ filter }: { filter: string }) => {
  const { handleFilterChange } = useContext(FilterContext);
  return (
    <FilterWrapper
      onClick={(e) => {
        const target = event.target as HTMLButtonElement;
        const value = target.textContent as FilterType;
        handleFilterChange(value);
      }}
    >
      {filter}
    </FilterWrapper>
  );
};

export default Filter;
