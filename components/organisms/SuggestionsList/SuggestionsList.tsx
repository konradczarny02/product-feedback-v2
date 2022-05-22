import { StyledList } from './SuggestionsList.styles';
import Suggestion from '../../molecules/Suggestion/Suggestion';
import { useContext } from 'react';
import EmptyFeedback from '../../molecules/EmptyFeedback/EmptyFeedback';
import { useSort } from '../../../lib/useSort';
import { FilterContext } from '../../../providers/FilterProvider';
import { SortContext } from '../../../providers/SortProvider';

const SuggestionsList = ({ suggestions }) => {
  const { filter } = useContext(FilterContext);
  const { sortBy } = useContext(SortContext);
  const [filteredSuggestions] = useSort(suggestions, filter, sortBy);

  return (
    <>
      {filteredSuggestions.length < 1 ? (
        <EmptyFeedback />
      ) : (
        <StyledList>
          {filteredSuggestions.map((suggestion) => (
            <Suggestion key={suggestion.id} data={suggestion} />
          ))}
        </StyledList>
      )}
    </>
  );
};

export default SuggestionsList;
