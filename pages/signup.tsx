import { useForm, SubmitHandler } from 'react-hook-form';
import styled from 'styled-components';
import { StyledError } from '../components/organisms/Forms/CreateForm.styles';
import { useContext, useState } from 'react';
import { LinkWrapper, SignInWrapper, Wrapper } from './signin';
import { useRouter } from 'next/router';
import { auth } from '../lib/mutations';
import { AuthContext } from '../providers/AuthProvider';
import Link from 'next/link';

const firstLetterToUpperCase = (str) => {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
};

export const SignUpWrapper = styled(SignInWrapper)`
  input#firstName {
    outline: ${({ theme, errors, authError }) => {
      if (errors.firstName || authError) {
        return `1px solid ${theme.colors.error}`;
      } else {
        return `none`;
      }
    }};
    &:focus {
      outline: ${({ theme, errors, authError }) => {
        if (errors.firstName || authError) {
          return `1px solid ${theme.colors.error}`;
        } else {
          return `1px solid ${theme.colors.blue}`;
        }
      }};
    }
  }

  input#lastName {
    outline: ${({ theme, errors, authError }) => {
      if (errors.lastName || authError) {
        return `1px solid ${theme.colors.error}`;
      } else {
        return `none`;
      }
    }};
    &:focus {
      outline: ${({ theme, errors, authError }) => {
        if (errors.lastName || authError) {
          return `1px solid ${theme.colors.error}`;
        } else {
          return `1px solid ${theme.colors.blue}`;
        }
      }};
    }
  }

  label[for='firstName'] {
    @media (min-width: 768px) {
      flex-basis: 49%;
      flex-wrap: wrap;
    }
  }

  label[for='lastName'] {
    @media (min-width: 768px) {
      flex-basis: 49%;
      margin-left: 2%;
    }
  }
`;

interface FormInterface {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

const SignUp = () => {
  const [authError, setAuthError] = useState<string>('');
  const { handleSignIn } = useContext(AuthContext);
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInterface>();
  const onSubmit: SubmitHandler<FormInterface> = async ({ firstName, lastName, password, email }) => {
    const userName = `${firstName.toLowerCase()}${lastName.toLowerCase()}`;
    const body = {
      firstName: firstLetterToUpperCase(firstName),
      lastName: firstLetterToUpperCase(lastName),
      userName,
      password,
      email,
    };
    const res = await auth('signup', body);
    if (res.status >= 400) {
      setAuthError('User with that email already exists');
    } else {
      reset();
      setTimeout(() => {
        handleSignIn();
        router.push('/');
      }, 2000);
    }
  };

  return (
    <Wrapper>
      <SignUpWrapper errors={errors} authError={authError}>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName">
            First Name
            <input
              id="firstName"
              placeholder="John"
              type="text"
              {...register('firstName', {
                onChange: (e) => {
                  setAuthError('');
                },
                required: true,
                minLength: 3,
              })}
            />
            {errors.firstName && (
              <StyledError margin={-3} padding={12}>
                {`Min length: 3`}
              </StyledError>
            )}
          </label>
          <label htmlFor="lastName">
            Last Name
            <input
              id="lastName"
              placeholder="Smith"
              type="text"
              {...register('lastName', { onChange: () => setAuthError(''), required: true, minLength: 3 })}
            />
            {errors.lastName && (
              <StyledError margin={-3} padding={12}>
                {`Min length: 3`}
              </StyledError>
            )}
          </label>
          <label htmlFor="email">
            Email
            <input
              id="email"
              placeholder="example@domain.com"
              type="email"
              {...register('email', { onChange: () => setAuthError(''), required: true })}
            />
            {errors.email && (
              <StyledError margin={-3} padding={12}>
                {`Email is not valid`}
              </StyledError>
            )}
          </label>
          <label htmlFor="password">
            Password
            <input
              id="password"
              placeholder="********"
              type="password"
              {...register('password', {
                onChange: (e) => {
                  setAuthError('');
                  let length = e.target.value;
                  if (length === 0) {
                  }
                },
                required: true,
                minLength: 8,
              })}
            />
            {errors.password && (
              <StyledError margin={-3} padding={12}>
                {`Min length: 8`}
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
              Sign Up
            </button>
          </div>
        </form>
        <LinkWrapper>
          Already a user? <Link href="signin">Sign In</Link>
        </LinkWrapper>
      </SignUpWrapper>
    </Wrapper>
  );
};

export default SignUp;
