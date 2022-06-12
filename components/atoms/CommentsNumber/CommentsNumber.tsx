import { StyledCommentsNumber } from './CommentsNumber.styles';
import CommentsIcon from '../../../styles/images/icons/commentIcon.svg';
import useRedirect from '../../../lib/useRedirect';

type CommentsProps = {
  commentsNumber: number;
  suggestionId: number;
};

const CommentsCount = ({ commentsNumber, suggestionId }: CommentsProps) => {
  const { handleRedirect } = useRedirect(`/suggestion/${suggestionId}`);

  return (
    <StyledCommentsNumber onClick={handleRedirect}>
      <CommentsIcon />
      <p>{commentsNumber}</p>
    </StyledCommentsNumber>
  );
};

export default CommentsCount;
