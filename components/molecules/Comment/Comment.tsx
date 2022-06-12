import useReplies from '../../../lib/useReplies';
import CommentReply from '../../atoms/CommentReply/CommentReply';
import Spinner from '../../atoms/Spinner/Spinner';
import Image from 'next/image';
import { StyledComment, AuthorInfo, Content, RepliesList, SpinnerWrapper } from './Comment.styles';
import { ICommentWithUser } from '../../../types/types';

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
  const { isLoading, handleReply, isReplying, replies } = useReplies(id);

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
        <button onClick={handleReply}>Reply</button>
      </AuthorInfo>
      <Content>{content}</Content>
      {isReplying ? <CommentReply parentId={id} /> : null}
      {(() => {
        if (isLoading)
          return (
            <SpinnerWrapper>
              <Spinner />
            </SpinnerWrapper>
          );
        if (replies.length && !isLoading)
          return (
            <RepliesList>
              {replies.map((reply: ICommentWithUser) => (
                <Comment key={reply.id} comment={reply} isReply={true} />
              ))}
            </RepliesList>
          );
      })()}
    </StyledComment>
  );
};

export default Comment;
