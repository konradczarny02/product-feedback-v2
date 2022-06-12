import { Wrapper } from './SignOut.styles';
import { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';

const SignOut = () => {
  const { handleSignOut } = useContext(AuthContext);
  return <Wrapper onClick={handleSignOut}>Sign Out</Wrapper>;
};

export default SignOut;
