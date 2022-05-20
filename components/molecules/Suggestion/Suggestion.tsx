import Filter from '../../atoms/Filter/Filter';
import Upvotes from '../../atoms/Upvotes/Upvotes';
import CommentsNumber from '../../atoms/CommentsNumber/CommentsNumber';
import { StyledSuggestion, StyledDescription } from './Suggestion.styles';
import { Category } from '../../../types/types';

type SuggestionProps = {
  data: {
    title: string;
    details: string;
    category: Category;
    comments: number;
    upvotes: number;
  };
};

const Suggestion = ({ data: { title, details, category, upvotes, comments } }: SuggestionProps) => {
  return (
    <StyledSuggestion>
      <h3>{title}</h3>
      <StyledDescription>{details}</StyledDescription>
      <span>
        <Filter filter={category} />
      </span>
      <Upvotes upvotesNumber={upvotes} />
      <CommentsNumber commentsNumber={comments ? comments : 0} />
    </StyledSuggestion>
  );
};

export default Suggestion;
