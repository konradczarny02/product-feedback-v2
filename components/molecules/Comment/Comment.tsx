import { StyledComment, AuthorInfo, Content } from './Comment.styles';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CommentReply from '../../atoms/CommentReply/CommentReply';
import fetcher from '../../../lib/fetcher';

const Comment = ({
  comment: {
    user: { firstName, lastName, userName },
    content,
    id,
  },
}) => {
  const [isReplying, setIsReplying] = useState<boolean>(false);
  const [replies, setReplies] = useState([]);

  useEffect(() => {
    fetcher('/comment/getReplies', { parentId: id })
      .then((res) => res.json())
      .then((data) => setReplies(data))
      .catch((error) => console.error(error));
  }, []);

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
      {replies.length ? (
        <ul style={{ marginLeft: 'auto', width: '90%' }}>
          {replies.map((reply) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </ul>
      ) : null}
    </StyledComment>
  );
};

export default Comment;
