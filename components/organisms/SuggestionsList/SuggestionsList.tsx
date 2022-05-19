import { StyledList } from './SuggestionsList.styles';
import Suggestion from '../../molecules/Suggestion/Suggestion';

const SuggestionsList = ({ suggestions }) => {
  console.log(suggestions);
  return (
    <StyledList>
      {suggestions.map((suggestion) => (
        <Suggestion key={suggestion.id} data={suggestion} />
      ))}
    </StyledList>
  );
};

export default SuggestionsList;
