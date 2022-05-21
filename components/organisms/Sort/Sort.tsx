import AddButton from '../../atoms/AddButton/AddButton';
import { SortWrapper } from './Sort.styles';
import SuggestionIcon from '../../../styles/images/icons/suggestionsIcon.svg';
import { useContext, useEffect, useState } from 'react';
import fetcher from '../../../lib/fetcher';
import { GlobalContext } from '../../../providers/GlobalProvider';
import { SortBy } from '../../../types/types';

const Sort = () => {
  const [suggestionsNumber, setSuggestionsNumber] = useState<number>(0);
  const { handleSortChange } = useContext(GlobalContext);

  useEffect(() => {
    fetcher('/suggestion')
      .then((data) => data.json())
      .then((data) => setSuggestionsNumber(data.length));
  }, []);

  return (
    <SortWrapper>
      <SuggestionIcon />
      <span>{suggestionsNumber} Suggestions</span>
      <p>Sort by : </p>
      <select
        onChange={(event) => {
          const target = event.target as HTMLSelectElement;
          const value = target.value as SortBy;
          handleSortChange(value);
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
