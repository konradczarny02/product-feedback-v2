import styled from 'styled-components';

export const EditWrapper = styled.a`
  text-decoration: none;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.blue};
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  border: none;
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
