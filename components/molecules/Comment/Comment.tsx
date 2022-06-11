import { StyledComment, AuthorInfo, Content } from './Comment.styles';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CommentReply from '../../atoms/CommentReply/CommentReply';
import fetcher from '../../../lib/fetcher';
import { ICommentWithUser } from '../../../types/types';
import Spinner from '../../atoms/Spinner/Spinner';

type Props = {
  comment: ICommentWithUser;
  isReply: boolean;
};

const Comment = ({
  comment: {
    user: { firstName, lastName, userName },
    content,
    id,
  },
  isReply,
}: Props) => {
  const [isReplying, setIsReplying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [replies, setReplies] = useState<ICommentWithUser[]>([] as ICommentWithUser[]);

  useEffect(() => {
    setIsLoading(true);
    fetcher('/comment/getReplies', { parentId: id })
      .then((res) => res.json())
      .then((data) => {
        setReplies(data);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <StyledComment isReply={isReply}>
      <AuthorInfo>
        <Image src="/avatar2.svg" width={40} height={40} />
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
      {(() => {
        if (isLoading)
          return (
            <div style={{ width: '90%', display: 'flex', justifyContent: 'center' }}>
              <Spinner />
            </div>
          );
        if (replies.length && !isLoading)
          return (
            <ul style={{ marginLeft: 'auto', width: '90%' }}>
              {replies.map((reply: ICommentWithUser) => (
                <Comment key={reply.id} comment={reply} isReply={true} />
              ))}
            </ul>
          );
      })()}
    </StyledComment>
  );
};

export default Comment;
