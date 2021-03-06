import fetcher from './fetcher';
import { useEffect, useState } from 'react';

const useCurrent = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetcher('/user/current')
      .then((data) => data.json())
      .then((data) => {
        setUser(data);
        setIsLoading(false);
      });
  }, []);

  return { user, isLoading };
};

export default useCurrent;
