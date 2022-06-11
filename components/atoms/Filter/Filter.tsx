import { MouseEvent } from 'react';
import { FilterWrapper } from './Filter.styles';
import { Filter as FilterType } from '../../../types/types';
import { useAppDispatch } from '../../../store/hooks';
import { change } from '../../../store/filterSlice';

type Props = {
  filter: FilterType;
};

const Filter = ({ filter }: Props) => {
  const dispatch = useAppDispatch();
  return (
    <FilterWrapper
      onClick={(event: MouseEvent<HTMLButtonElement>) => {
        const target = event.currentTarget;
        const value = target.textContent as FilterType;
        dispatch(change(value));
      }}
    >
      {filter}
    </FilterWrapper>
  );
};

export default Filter;
