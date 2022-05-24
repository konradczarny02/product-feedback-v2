import { useState, useEffect, createContext, ReactNode } from 'react';
import { PropsChildren } from '../types/types';
import fetcher from '../lib/fetcher';

export const AuthContext = createContext<{ isAuthenticated: boolean }>({ isAuthenticated: false });

const AuthProvider = ({ children }: PropsChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    fetcher('/user/current')
      .then((data) => data.json())
      .then((res) => {
        if (res.error) {
          setIsAuthenticated(false);
        } else {
          setIsAuthenticated(true);
        }
      })
      .catch((error) => console.log('hi'));
  }, []);

  return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
