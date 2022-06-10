import styled from 'styled-components';
import { SignInWrapper } from './SignIn.styles';

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
