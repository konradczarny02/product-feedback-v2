import { StyledComment, AuthorInfo, Content, CommentReply } from './Comment.styles';
import Image from 'next/image';
import { useState } from 'react';

const Comment = ({ comment }) => {
  const [isReplying, setIsReplying] = useState<boolean>(false);
  return (
    <StyledComment>
      <AuthorInfo>
        <Image src="/avatar.svg" width={40} height={40} />
        <div>
          <h3>
            {comment.user.firstName} {comment.user.lastName}
          </h3>
          <h4>@{comment.user.userName}</h4>
        </div>
        <button onClick={() => setIsReplying((prevState) => !prevState)}>Reply</button>
      </AuthorInfo>
      <Content>{comment.content}</Content>
      <CommentReply isReplying={isReplying}>
        <label htmlFor="comment">
          <textarea name="comment" id="comment" placeholder="Comment" />
        </label>
        <input type="submit" value="Post Reply" />
      </CommentReply>
    </StyledComment>
  );
};

export default Comment;
