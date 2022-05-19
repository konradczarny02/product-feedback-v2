import Link from 'next/link';
import styled from 'styled-components';

export const AddButtonWrapper = styled(Link)`
  width: 150px;
  font-size: 13px;
  font-weight: 700;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.pink};
  border: none;
  border-radius: 10px;
  text-decoration: none;
`;
