import { StyledList } from './SuggestionsList.styles';
import Suggestion from '../../molecules/Suggestion/Suggestion';
import { useContext } from 'react';
import { GlobalContext } from '../../../providers/GlobalProvider';

const SuggestionsList = ({ suggestions }) => {
  const { state } = useContext(GlobalContext);
  console.log(state);
  return (
    <StyledList>
      {suggestions.map((suggestion) => (
        <Suggestion key={suggestion.id} data={suggestion} />
      ))}
    </StyledList>
  );
};

export default SuggestionsList;
