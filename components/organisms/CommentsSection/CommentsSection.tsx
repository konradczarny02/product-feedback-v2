import { Wrapper } from './CommentsSection.styles';
import Comment from '../../molecules/Comment/Comment';
import { ICommentWithUser } from '../../../types/types';

type Props = {
  comments: ICommentWithUser[];
  num: number;
};

const CommentsSection = ({ comments, num }: Props) => {
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
