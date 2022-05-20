import Upvotes from '../../atoms/Upvotes/Upvotes';
import CommentsNumber from '../../atoms/CommentsNumber/CommentsNumber';
import { StyledSuggestion, StyledDescription } from './Suggestion.styles';
import { Category as CategoryType } from '../../../types/types';
import Category from '../../atoms/Category/Category';

type SuggestionProps = {
  data: {
    title: string;
    details: string;
    category: CategoryType;
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
        <Category name={category} />
      </span>
      <Upvotes upvotesNumber={upvotes} />
      <CommentsNumber commentsNumber={comments ? comments : 0} />
    </StyledSuggestion>
  );
};

export default Suggestion;
