import styled from 'styled-components';

export const Wrapper = styled.button`
  width: 120px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.pink};
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  margin-top: 24px;

  &:hover {
    transform: scale(1.1);
  }
`;
