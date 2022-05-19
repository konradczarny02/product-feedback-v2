import styled from 'styled-components';

export const StyledReturn = styled.a`
  margin-left: 5%;
  padding-top: 32px;
  text-decoration: none;
  display: flex;
  align-items: center;

  svg {
    margin-right: 16px;
  }
  p {
    font-size: 13px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.gray};
  }
`;
