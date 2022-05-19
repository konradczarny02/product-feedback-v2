import { FilterWrapper } from './Filter.styles';
import { useContext } from 'react';
import { GlobalContext } from '../../../providers/GlobalProvider';
import { Filter as FilterType } from '../../../types/types';

const Filter = ({ filter }: { filter: string }) => {
  const { handleFilterChange } = useContext(GlobalContext);
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
