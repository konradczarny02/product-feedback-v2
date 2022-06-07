import { useRouter } from 'next/router';
import Upvotes from '../../atoms/Upvotes/Upvotes';
import CommentsNumber from '../../atoms/CommentsNumber/CommentsNumber';
import { StyledSuggestion, StyledDescription } from './Suggestion.styles';
import { Category as CategoryType } from '../../../types/types';
import Category from '../../atoms/Category/Category';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { ModalContext } from '../../../providers/ModalProvider';

type SuggestionProps = {
  data: {
    id: number;
    title: string;
    details: string;
    category: CategoryType;
    comments?: string[];
    upvotes?: any[];
  };
};

const Suggestion = ({ data: { id, title, details, category, upvotes, comments } }: SuggestionProps) => {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);
  const { handleModalOpen } = useContext(ModalContext);
  return (
    <StyledSuggestion>
      <h3>{title}</h3>
      <StyledDescription>{details}</StyledDescription>
      <span>
        <Category name={category} />
      </span>
      <Upvotes
        upvotesNumber={upvotes.length}
        onClick={() => {
          if (!isAuthenticated) {
            handleModalOpen();
          }
        }}
      />
      <CommentsNumber
        commentsNumber={comments ? comments.length : 0}
        onClick={() => {
          if (isAuthenticated) {
            router.push(`/suggestion/${id}`);
          } else {
            handleModalOpen();
          }
        }}
      />
    </StyledSuggestion>
  );
};

export default Suggestion;
