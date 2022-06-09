import { useState, useEffect } from 'react';

const useUserId = () => {
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    setUserId(+sessionStorage.getItem('userId'));
  }, []);

  return { userId };
};

export default useUserId;
