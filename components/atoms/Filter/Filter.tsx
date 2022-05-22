import { FilterWrapper } from './Filter.styles';
import { Filter as FilterType } from '../../../types/types';
import { useAppDispatch } from '../../../store/hooks';
import { change } from '../../../store/filterSlice';

const Filter = ({ filter }: { filter: string }) => {
  const dispatch = useAppDispatch();
  return (
    <FilterWrapper
      onClick={(e) => {
        const target = event.target as HTMLButtonElement;
        const value = target.textContent as FilterType;
        dispatch(change(value));
      }}
    >
      {filter}
    </FilterWrapper>
  );
};

export default Filter;
