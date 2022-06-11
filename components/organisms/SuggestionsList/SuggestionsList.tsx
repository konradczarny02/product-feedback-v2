import { StyledList } from './SuggestionsList.styles';
import Suggestion from '../../molecules/Suggestion/Suggestion';
import EmptyFeedback from '../../molecules/EmptyFeedback/EmptyFeedback';
import { useSort } from '../../../lib/useSort';
import { useAppSelector } from '../../../store/hooks';
import { ISuggestionResponse } from '../../../types/types';

type Props = {
  suggestions: ISuggestionResponse[];
};

const SuggestionsList = ({ suggestions }: Props) => {
  const filter = useAppSelector((state) => state.filter);
  const sortBy = useAppSelector((state) => state.sort);
  const [filteredSuggestions] = useSort(suggestions, filter.filter, sortBy.sort);

  return (
    <>
      {filteredSuggestions.length < 1 ? (
        <EmptyFeedback />
      ) : (
        <StyledList>
          {filteredSuggestions.map((suggestion: ISuggestionResponse) => (
            <Suggestion key={suggestion.id} data={suggestion} />
          ))}
        </StyledList>
      )}
    </>
  );
};

export default SuggestionsList;
