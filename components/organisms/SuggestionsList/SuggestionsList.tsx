import { useEffect, useState } from 'react';
import { StyledList } from './SuggestionsList.styles';
import Suggestion from '../../molecules/Suggestion/Suggestion';
import { useContext } from 'react';
import { GlobalContext } from '../../../providers/GlobalProvider';
import EmptyFeedback from '../../molecules/EmptyFeedback/EmptyFeedback';

const SuggestionsList = ({ suggestions }) => {
  const { state } = useContext(GlobalContext);
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);

  useEffect(() => {
    if (state.filter === 'All') {
      setFilteredSuggestions(suggestions);
    } else {
      setFilteredSuggestions(suggestions.filter((suggestion) => suggestion.category === state.filter));
    }
  }, [state.filter, suggestions]);

  useEffect(() => {
    switch (state.sortBy) {
      case 'Most Upvotes':
        setFilteredSuggestions([...filteredSuggestions].sort((a, b) => b.upvotes - a.upvotes));
        break;
      case 'Least Upvotes':
        setFilteredSuggestions([...filteredSuggestions].sort((a, b) => a.upvotes - b.upvotes));
        break;
      case 'Most Comments':
        setFilteredSuggestions([...filteredSuggestions].sort((a, b) => b.comments - a.comments));
        break;
      case 'Least Comments':
        setFilteredSuggestions([...filteredSuggestions].sort((a, b) => a.comments - b.comments));
    }
  }, [state.sortBy, filteredSuggestions]);

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
