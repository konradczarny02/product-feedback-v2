import { StyledUpvotes } from './Upvotes.styles';
import UpvoteIcon from '../../../styles/images/icons/upvoteIcon.svg';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { ModalContext } from '../../../providers/ModalProvider';
import useUserId from '../../../lib/userUserId';
import fetcher from '../../../lib/fetcher';
import { useRouter } from 'next/router';

type UpvotesProps = {
  upvotesNumber: number;
  suggestionId: number;
};

const Upvotes = ({ upvotesNumber, suggestionId }: UpvotesProps) => {
  const { isAuthenticated } = useContext(AuthContext);
  const { handleModalOpen } = useContext(ModalContext);
  const [isUpvoted, setIsUpvoted] = useState(false);
  const { userId } = useUserId();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated && userId !== null) {
      fetcher('/upvote/get', { userId, suggestionId })
        .then((res) => res.json())
        .then((data) => {
          if (data === 'Post not upvoted') {
            setIsUpvoted(false);
          } else {
            setIsUpvoted(true);
          }
        });
    }
  }, [isAuthenticated]);

  return (
    <StyledUpvotes
      isUpvoted={isUpvoted}
      onClick={async () => {
        if (!isAuthenticated) {
          handleModalOpen();
        } else {
          if (isUpvoted) {
            await fetcher('/upvote/remove', { userId, suggestionId });
            router.reload();
          } else {
            await fetcher('/upvote/add', { userId, suggestionId });
            router.reload();
          }
        }
      }}
    >
      <UpvoteIcon />
      <p>{upvotesNumber}</p>
    </StyledUpvotes>
  );
};

export default Upvotes;
