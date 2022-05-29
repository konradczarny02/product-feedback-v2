import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  div {
    display: flex;
    justify-content: space-between;

    a {
      flex-basis: 47%;
    }
  }

  h3 {
    text-align: center;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  button {
    border: none;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.darkGray};
    width: 50%;
    margin: 0 auto;
    height: 40px;
    transition: transform 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const SignInLink = styled.a`
  flex-basis: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.pink};
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  height: 40px;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const SignUpLink = styled(SignInLink)`
  background-color: ${({ theme }) => theme.colors.blue};
`;
