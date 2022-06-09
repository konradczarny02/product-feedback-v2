import { StyledCommentsNumber } from './CommentsNumber.styles';
import CommentsIcon from '../../../styles/images/icons/commentIcon.svg';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { ModalContext } from '../../../providers/ModalProvider';
import { useRouter } from 'next/router';

type CommentsProps = {
  commentsNumber: number;
  suggestionId: number;
};

const CommentsCount = ({ commentsNumber, suggestionId }: CommentsProps) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { handleModalOpen } = useContext(ModalContext);
  const router = useRouter();
  return (
    <StyledCommentsNumber
      onClick={() => {
        if (!isAuthenticated) {
          handleModalOpen();
        } else {
          router.push(`/suggestion/${suggestionId}`);
        }
      }}
    >
      <CommentsIcon />
      <p>{commentsNumber}</p>
    </StyledCommentsNumber>
  );
};

export default CommentsCount;
