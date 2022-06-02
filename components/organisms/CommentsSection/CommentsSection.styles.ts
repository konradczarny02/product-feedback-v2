import styled from 'styled-components';

export const Wrapper = styled.section`
  width: 100%;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  margin-top: 24px;

  h2 {
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  ul {
    list-style: none;
  }
`;
