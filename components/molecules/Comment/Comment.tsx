import { StyledComment, AuthorInfo, Content } from './Comment.styles';
import Image from 'next/image';
import { useState } from 'react';
import CommentReply from '../../atoms/CommentReply/CommentReply';

const Comment = ({
  comment: {
    user: { firstName, lastName, userName },
    content,
    id,
  },
}) => {
  const [isReplying, setIsReplying] = useState<boolean>(false);
  return (
    <StyledComment>
      <AuthorInfo>
        <Image src="/avatar.svg" width={40} height={40} />
        <div>
          <h3>
            {firstName} {lastName}
          </h3>
          <h4>@{userName}</h4>
        </div>
        <button onClick={() => setIsReplying((prevState) => !prevState)}>Reply</button>
      </AuthorInfo>
      <Content>{content}</Content>
      {isReplying ? <CommentReply parentId={id} /> : null}
    </StyledComment>
  );
};

export default Comment;
