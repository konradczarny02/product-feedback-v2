import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { auth } from '../lib/mutations';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

interface FormInterface {
  email: string;
  password: string;
}

const SignUp = () => {
  const [error, setError] = useState<string>('');
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
      setError('Wrong email or password');
    } else {
      reset();
      setTimeout(() => {
        router.push('/');
      }, 3000);
    }
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('email', { required: true })} />
        <input type="password" {...register('password', { required: true })} />
        <button type="submit">Sign In</button>
      </form>
      {error && <p>{error}</p>}
    </Wrapper>
  );
};

export default SignUp;
