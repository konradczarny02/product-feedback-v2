import { useCallback, useEffect, useState } from 'react';
import { ICommentWithUser } from '../types/types';
import fetcher from './fetcher';

const useReplies = (id: number) => {
  const [isReplying, setIsReplying] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [replies, setReplies] = useState<ICommentWithUser[]>([] as ICommentWithUser[]);
  const handleReply = useCallback(() => setIsReplying((prevState) => !prevState), []);

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

  return { isReplying, handleReply, replies, isLoading };
};

export default useReplies;
