import { useRouter } from 'next/router';
import Upvotes from '../../atoms/Upvotes/Upvotes';
import CommentsNumber from '../../atoms/CommentsNumber/CommentsNumber';
import { StyledSuggestion, StyledDescription } from './Suggestion.styles';
import { Category as CategoryType } from '../../../types/types';
import Category from '../../atoms/Category/Category';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

type SuggestionProps = {
  data: {
    id: number;
    title: string;
    details: string;
    category: CategoryType;
    comments: number;
    upvotes: number;
  };
};

const Suggestion = ({ data: { id, title, details, category, upvotes, comments } }: SuggestionProps) => {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <StyledSuggestion
      onClick={() => {
        if (isAuthenticated) {
          router.push(`/suggestion/${id}`);
        } else {
          router.push(`/signin`);
        }
      }}
    >
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
