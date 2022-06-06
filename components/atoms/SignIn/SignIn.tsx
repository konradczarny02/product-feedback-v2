import { Wrapper } from '../SignOut/SignOut.styles';
import { useRouter } from 'next/router';

const SignIn = () => {
  const router = useRouter();
  return <Wrapper onClick={() => router.push('/signin')}>Sign In</Wrapper>;
};

export default SignIn;
