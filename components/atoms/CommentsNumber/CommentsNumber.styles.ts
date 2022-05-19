import styled from 'styled-components';

export const StyledCommentsNumber = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  padding: 6px 2px;
  p {
    font-size: 13px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkBlue};
    margin: 0 0 0 6px;
  }
`;
