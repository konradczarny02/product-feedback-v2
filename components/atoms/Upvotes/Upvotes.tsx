import { StyledUpvotes } from './Upvotes.styles';
import UpvoteIcon from '../../../styles/images/icons/upvoteIcon.svg';
import useUpvote from '../../../lib/useUpvote';

type UpvotesProps = {
  upvotesNumber: number;
  suggestionId: number;
};

const Upvotes = ({ upvotesNumber, suggestionId }: UpvotesProps) => {
  const { isUpvoted, handleUpvote } = useUpvote(suggestionId);

  return (
    <StyledUpvotes isUpvoted={isUpvoted} onClick={handleUpvote}>
      <UpvoteIcon />
      <p>{upvotesNumber}</p>
    </StyledUpvotes>
  );
};

export default Upvotes;
