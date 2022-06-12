import { useState, useEffect, createContext, useCallback, useMemo } from 'react';
import { PropsChildren, IUser } from '../types/types';
import fetcher from '../lib/fetcher';

interface IAuthContext {
  isAuthenticated: boolean;
  user: IUser;
  handleSignIn: () => void;
  handleSignOut: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  isAuthenticated: false,
  user: {} as IUser,
  handleSignIn: () => {},
  handleSignOut: () => {},
});

const AuthProvider = ({ children }: PropsChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({} as IUser);
  const handleSignIn = useCallback(() => setIsAuthenticated(true), []);
  const handleSignOut = useCallback(async () => {
    await fetcher('/signout');
    setIsAuthenticated(false);
    setUser({} as IUser);
  }, []);

  useEffect(() => {
    fetcher('/user/current')
      .then((data) => data.json())
      .then((res) => {
        if (res.error) {
          setIsAuthenticated(false);
        } else {
          setUser(res);
          setIsAuthenticated(true);
        }
      })
      .catch((error) => console.log(error));
  }, [isAuthenticated]);

  const context = useMemo(
    (): IAuthContext => ({
      isAuthenticated,
      user,
      handleSignIn,
      handleSignOut,
    }),
    [user, isAuthenticated, handleSignOut, handleSignIn]
  );

  return <AuthContext.Provider value={context}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
