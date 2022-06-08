import { useRouter } from 'next/router';
import Upvotes from '../../atoms/Upvotes/Upvotes';
import CommentsNumber from '../../atoms/CommentsNumber/CommentsNumber';
import { StyledSuggestion, StyledDescription } from './Suggestion.styles';
import { Category as CategoryType } from '../../../types/types';
import Category from '../../atoms/Category/Category';

type SuggestionProps = {
  data: {
    id: number;
    title: string;
    details: string;
    category: CategoryType;
    comments?: any[];
    upvotes?: any[];
  };
};

const Suggestion = ({ data: { id, title, details, category, upvotes, comments } }: SuggestionProps) => {
  return (
    <StyledSuggestion>
      <h3>{title}</h3>
      <StyledDescription>{details}</StyledDescription>
      <span>
        <Category name={category} />
      </span>
      <Upvotes suggestionId={id} upvotesNumber={upvotes.length} />
      <CommentsNumber suggestionId={id} commentsNumber={comments.length} />
    </StyledSuggestion>
  );
};

export default Suggestion;
