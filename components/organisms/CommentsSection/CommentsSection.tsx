import { Wrapper } from './CommentsSection.styles';
import Comment from '../../molecules/Comment/Comment';
import { Comment as CommentType, User } from '../../../types/types';

type Props = {
  comments: any[];
  num: number;
};

const CommentsSection = ({ comments, num }) => {
  return (
    <Wrapper>
      <h2>{num} Comments</h2>
      <ul>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} isReply={false} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default CommentsSection;
