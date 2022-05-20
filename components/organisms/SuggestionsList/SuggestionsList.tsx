import { useEffect, useState } from 'react';
import { StyledList } from './SuggestionsList.styles';
import Suggestion from '../../molecules/Suggestion/Suggestion';
import { useContext } from 'react';
import { GlobalContext } from '../../../providers/GlobalProvider';
import EmptyFeedback from '../../molecules/EmptyFeedback/EmptyFeedback';

const SuggestionsList = ({ suggestions }) => {
  const { state } = useContext(GlobalContext);
  const { filter, sortBy } = state;
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions);

  useEffect(() => {
    if (filter === 'All') {
      switch (sortBy) {
        case 'Most Upvotes':
          setFilteredSuggestions([...suggestions].sort((a, b) => b.upvotes - a.upvotes));
          break;
        case 'Least Upvotes':
          setFilteredSuggestions([...suggestions].sort((a, b) => a.upvotes - b.upvotes));
          break;
        case 'Most Comments':
          setFilteredSuggestions([...suggestions].sort((a, b) => b.comments - a.comments));
          break;
        case 'Least Comments':
          setFilteredSuggestions([...suggestions].sort((a, b) => a.comments - b.comments));
      }
    } else {
      const filtered = suggestions.filter((suggestion) => suggestion.category === filter);
      switch (sortBy) {
        case 'Most Upvotes':
          setFilteredSuggestions([...filtered].sort((a, b) => b.upvotes - a.upvotes));
          break;
        case 'Least Upvotes':
          setFilteredSuggestions([...filtered].sort((a, b) => a.upvotes - b.upvotes));
          break;
        case 'Most Comments':
          setFilteredSuggestions([...filtered].sort((a, b) => b.comments - a.comments));
          break;
        case 'Least Comments':
          setFilteredSuggestions([...filtered].sort((a, b) => a.comments - b.comments));
      }
    }
  }, [filter, suggestions, sortBy]);

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
