import { StyledUpvotes } from './Upvotes.styles';
import UpvoteIcon from '../../../styles/images/icons/upvoteIcon.svg';

type UpvotesProps = {
  upvotesNumber: number;
};

const Upvotes = ({ upvotesNumber }: UpvotesProps) => {
  return (
    <StyledUpvotes>
      <UpvoteIcon />
      <p>{upvotesNumber}</p>
    </StyledUpvotes>
  );
};

export default Upvotes;
