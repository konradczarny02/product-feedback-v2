import { useState, useEffect, createContext, useCallback } from 'react';
import { PropsChildren } from '../types/types';
import fetcher from '../lib/fetcher';

export const AuthContext = createContext<{ isAuthenticated: boolean; handleSignIn: () => void; handleSignOut: () => void }>({
  isAuthenticated: false,
  handleSignIn: () => {},
  handleSignOut: () => {},
});

const AuthProvider = ({ children }: PropsChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const handleSignIn = useCallback(() => setIsAuthenticated(true), []);
  const handleSignOut = useCallback(() => setIsAuthenticated(false), []);

  useEffect(() => {
    fetcher('/user/current')
      .then((data) => data.json())
      .then((res) => {
        if (res.error) {
          setIsAuthenticated(false);
        } else {
          sessionStorage.setItem('userId', res.id);
          setIsAuthenticated(true);
        }
      })
      .catch((error) => console.log(error));
  }, []);

  return <AuthContext.Provider value={{ isAuthenticated, handleSignIn, handleSignOut }}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
