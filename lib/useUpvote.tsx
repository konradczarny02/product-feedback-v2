import { useEffect, useContext, useState, useCallback } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { ModalContext } from '../providers/ModalProvider';
import { useRouter } from 'next/router';
import fetcher from './fetcher';

const useUpvote = (suggestionId: number) => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const { handleModalOpen } = useContext(ModalContext);
  const [isUpvoted, setIsUpvoted] = useState<boolean>(false);
  const router = useRouter();

  const handleUpvote = useCallback(async () => {
    if (!isAuthenticated) {
      handleModalOpen();
    } else {
      if (isUpvoted) {
        await fetcher('/upvote/remove', { userId: user.id, suggestionId });
        router.reload();
      } else {
        await fetcher('/upvote/add', { userId: user.id, suggestionId });
        router.reload();
      }
    }
  }, [isAuthenticated, isUpvoted, user.id]);

  useEffect(() => {
    if (isAuthenticated && user.id) {
      fetcher('/upvote/get', { userId: user.id, suggestionId })
        .then((res) => res.json())
        .then((data) => {
          if (data === 'Post not upvoted') {
            setIsUpvoted(false);
          } else {
            setIsUpvoted(true);
          }
        });
    } else {
      setIsUpvoted(false);
    }
  }, [isAuthenticated, user.id]);

  return { isUpvoted, handleUpvote };
};

export default useUpvote;
