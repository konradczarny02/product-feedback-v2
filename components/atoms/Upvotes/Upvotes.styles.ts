import styled from 'styled-components';

export const StyledUpvotes = styled.div`
  width: 72px;
  height: 32px;
  padding: 0 14px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.lightGray};
  margin-right: auto;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
  p {
    font-size: 13px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin: 0;
  }
`;
