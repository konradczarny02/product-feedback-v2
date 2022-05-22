import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

interface FormInterface {
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  password: string;
}

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInterface>();
  const onSubmit: SubmitHandler<FormInterface> = ({ firstName, lastName, userName, password, email }) => {
    console.log({ firstName, lastName, userName, password, email });
    reset();
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register('firstName', { required: true })} />
        <input type="text" {...register('lastName', { required: true })} />
        <input type="text" {...register('email', { required: true })} />
        <input type="password" {...register('password', { required: true })} />
        <input type="text" {...register('userName', { required: true })} />
        <button type="submit">Sign Up</button>
      </form>
    </Wrapper>
  );
};

export default SignUp;
