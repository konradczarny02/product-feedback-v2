import { Wrapper, SignInLink, SignUpLink } from './SignModal.styles';
import { useContext } from 'react';
import { ModalContext } from '../../../providers/ModalProvider';
import Link from 'next/link';

const SignModal = () => {
  const { handleModalClose } = useContext(ModalContext);
  return (
    <Wrapper>
      <h3>You have to be signed in</h3>
      <div>
        <Link href="signin" passHref>
          <SignInLink>Sign In</SignInLink>
        </Link>
        <Link href="signup" passHref>
          <SignUpLink>Sign Up</SignUpLink>
        </Link>
      </div>
      <button onClick={handleModalClose}>Close</button>
    </Wrapper>
  );
};

export default SignModal;
