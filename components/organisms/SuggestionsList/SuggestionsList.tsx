import { StyledList } from './SuggestionsList.styles';
import Suggestion from '../../molecules/Suggestion/Suggestion';
import { useContext } from 'react';
import { GlobalContext } from '../../../providers/GlobalProvider';
import EmptyFeedback from '../../molecules/EmptyFeedback/EmptyFeedback';
import { useSort } from '../../../lib/useSort';

const SuggestionsList = ({ suggestions }) => {
  const { state } = useContext(GlobalContext);
  const { filter, sortBy } = state;
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
