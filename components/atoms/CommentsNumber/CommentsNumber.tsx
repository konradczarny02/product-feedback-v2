import { StyledCommentsNumber } from './CommentsNumber.styles';
import CommentsIcon from '../../../styles/images/icons/commentIcon.svg';

type CommentsProps = {
  commentsNumber: number;
  onClick: () => void;
};

const CommentsCount = ({ commentsNumber, onClick }: CommentsProps) => {
  return (
    <StyledCommentsNumber onClick={onClick}>
      <CommentsIcon />
      <p>{commentsNumber}</p>
    </StyledCommentsNumber>
  );
};

export default CommentsCount;
