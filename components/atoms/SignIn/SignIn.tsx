import { Wrapper } from '../SignOut/SignOut.styles';
import { useRouter } from 'next/router';

const SignIn = () => {
  const router = useRouter();
  const handleSignIn = () => router.push('/signin');

  return <Wrapper onClick={handleSignIn}>Sign In</Wrapper>;
};

export default SignIn;
