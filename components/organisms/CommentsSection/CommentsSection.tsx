import { Wrapper } from './CommentsSection.styles';
import Comment from '../../molecules/Comment/Comment';

const CommentsSection = ({ comments }) => {
  console.log(comments);
  return (
    <Wrapper>
      <h2>{comments.length} Comments</h2>
      <ul>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default CommentsSection;
