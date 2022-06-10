import { useForm, SubmitHandler } from 'react-hook-form';
import { auth } from '../lib/mutations';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { StyledError } from '../components/organisms/Forms/CreateForm.styles';
import { AuthContext } from '../providers/AuthProvider';
import Link from 'next/link';
import { Wrapper, SignInWrapper, LinkWrapper } from '../components/organisms/Forms/SignIn.styles';

interface FormInterface {
  email: string;
  password: string;
}

const errorMessage = `Can't be empty`;

const SignIn = () => {
  const [authError, setAuthError] = useState<string>('');
  const { handleSignIn } = useContext(AuthContext);
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInterface>();
  const onSubmit: SubmitHandler<FormInterface> = async ({ password, email }) => {
    const res = await auth('signin', { email, password });
    if (res.status >= 400) {
      setAuthError('Wrong email or password');
    } else {
      reset();
      setTimeout(() => {
        handleSignIn();
        router.push('/');
      }, 200);
    }
  };
  return (
    <Wrapper>
      <SignInWrapper errors={errors} authError={authError}>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">
            Email
            <input
              id="email"
              placeholder="Type your email here"
              type="email"
              {...register('email', { onChange: () => setAuthError(''), required: true })}
            />
            {errors.email && (
              <StyledError margin={-3} padding={12}>
                {errorMessage}
              </StyledError>
            )}
          </label>
          <label htmlFor="password">
            Password
            <input
              id="password"
              placeholder="Type your password here"
              type="password"
              {...register('password', { onChange: () => setAuthError(''), required: true })}
            />
            {errors.password && (
              <StyledError margin={-3} padding={12}>
                {errorMessage}
              </StyledError>
            )}
          </label>
          {authError && (
            <StyledError margin={0} padding={0}>
              {authError}
            </StyledError>
          )}
          <div>
            <button disabled={!!authError} type="submit">
              Sign In
            </button>
          </div>
        </form>
        <LinkWrapper>
          Not a user? <Link href="signup">Sign Up</Link>
        </LinkWrapper>
      </SignInWrapper>
    </Wrapper>
  );
};

export default SignIn;
