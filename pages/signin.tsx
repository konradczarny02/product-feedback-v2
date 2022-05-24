import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { auth } from '../lib/mutations';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { StyledError } from '../components/organisms/Forms/CreateForm.styles';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

export const SignInWrapper = styled.div<{ errors: any; authError: string }>`
  width: 90%;
  max-width: 1024px;
  margin: auto;
  padding: 5%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};

  h1 {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin: 24px 0;
    text-align: center;
    flex-basis: 100%;

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }

  form {
    display: flex;
    flex-wrap: wrap;
  }

  label {
    flex-basis: 100%;
    display: flex;
    flex-wrap: wrap;
    font-size: 13px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkBlue};

    @media (min-width: 768px) {
      font-size: 15px;
    }

    input {
      flex-basis: 100%;
      height: 48px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colors.darkerWhite};
      border: none;
      padding: 16px;
      font-size: 14px;
      color: ${({ theme }) => theme.colors.darkGray};
      margin: 12px 0;

      &::placeholder {
        font-size: 13px;
        color: ${({ theme }) => theme.colors.gray};
        opacity: 0.6;

        @media (min-width: 768px) {
          font-size: 15px;
        }
      }

      &:focus {
        outline: 1px solid ${({ theme }) => theme.colors.blue};
      }

      @media (min-width: 768px) {
        font-size: 15px;
        height: 64px;
      }
    }

    input[type='email'] {
      outline: ${({ theme, errors, authError }) => {
        if (errors.email || authError) {
          return `1px solid ${theme.colors.error}`;
        } else {
          return `none`;
        }
      }};
      &:focus {
        outline: ${({ theme, errors, authError }) => {
          if (errors.email || authError) {
            return `1px solid ${theme.colors.error}`;
          } else {
            return `1px solid ${theme.colors.blue}`;
          }
        }};
      }
    }

    input[type='password'] {
      outline: ${({ theme, errors, authError }) => {
        if (errors.password || authError) {
          return `1px solid ${theme.colors.error}`;
        } else {
          return `none`;
        }
      }};
      &:focus {
        outline: ${({ theme, errors, authError }) => {
          if (errors.password || authError) {
            return `1px solid ${theme.colors.error}`;
          } else {
            return `1px solid ${theme.colors.blue}`;
          }
        }};
      }
    }
  }

  div {
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }

  button {
    border: none;
    border-radius: 10px;
    background-color: ${({ theme, authError }) => (authError ? theme.colors.error : theme.colors.pink)};
    width: 100%;
    max-width: 150px;
    margin: 24px 0;
    height: 40px;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 700;
    cursor: pointer;

    &[disabled] {
      cursor: not-allowed;
    }

    @media (min-width: 768px) {
      font-size: 15px;
      height: 48px;
    }
  }
`;

interface FormInterface {
  email: string;
  password: string;
}

const errorMessage = `Can't be empty`;

const SignUp = () => {
  const [authError, setAuthError] = useState<string>('');
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
      </SignInWrapper>
    </Wrapper>
  );
};

export default SignUp;
