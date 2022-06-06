import { StyledUpvotes } from './Upvotes.styles';
import UpvoteIcon from '../../../styles/images/icons/upvoteIcon.svg';

type UpvotesProps = {
  upvotesNumber: number;
  onClick: () => void;
};

const Upvotes = ({ upvotesNumber, onClick }: UpvotesProps) => {
  return (
    <StyledUpvotes onClick={onClick}>
      <UpvoteIcon />
      <p>{upvotesNumber}</p>
    </StyledUpvotes>
  );
};

export default Upvotes;
