import { MouseEvent } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { change } from '../../../store/filterSlice';
import { Filter as FilterType } from '../../../types/types';
import { FilterWrapper } from './Filter.styles';

type Props = {
  filter: FilterType;
};

const Filter = ({ filter }: Props) => {
  const dispatch = useAppDispatch();
  const handleChangeFilter = (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget;
    const value = target.textContent as FilterType;
    dispatch(change(value));
  };

  return <FilterWrapper onClick={handleChangeFilter}>{filter}</FilterWrapper>;
};

export default Filter;
