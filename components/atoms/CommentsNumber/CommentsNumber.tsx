import { StyledCommentsNumber } from './CommentsNumber.styles';
import CommentsIcon from '../../../styles/images/icons/commentIcon.svg';

type CommentsProps = {
  commentsNumber: number;
};

const CommentsCount = ({ commentsNumber }: CommentsProps) => {
  return (
    <StyledCommentsNumber>
      <CommentsIcon />
      <p>{commentsNumber}</p>
    </StyledCommentsNumber>
  );
};

export default CommentsCount;
