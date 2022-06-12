import AddButton from '../../atoms/AddButton/AddButton';
import { SortWrapper } from './Sort.styles';
import SuggestionIcon from '../../../styles/images/icons/suggestionsIcon.svg';
import { ChangeEvent, useEffect, useState } from 'react';
import fetcher from '../../../lib/fetcher';
import { SortBy } from '../../../types/types';
import { useAppDispatch } from '../../../store/hooks';
import { change } from '../../../store/sortSlice';

const Sort = () => {
  const [suggestionsNumber, setSuggestionsNumber] = useState<number>(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetcher('/suggestion/count')
      .then((data) => data.json())
      .then((data: number) => setSuggestionsNumber(data));
  }, []);

  return (
    <SortWrapper>
      <SuggestionIcon />
      <span>{suggestionsNumber} Suggestions</span>
      <p>Sort by : </p>
      <select
        onChange={(event: ChangeEvent<HTMLSelectElement>) => {
          const target = event.target as HTMLSelectElement;
          const value = target.value as SortBy;
          dispatch(change(value));
        }}
      >
        <option value="Most Upvotes">Most Upvotes</option>
        <option value="Least Upvotes">Least Upvotes</option>
        <option value="Most Comments">Most Comments</option>
        <option value="Least Comments">Least Comments</option>
      </select>
      <AddButton />
    </SortWrapper>
  );
};

export default Sort;
