import styled from 'styled-components';

export const StyledSuggestion = styled.li`
  width: 100%;
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;
  margin: 16px 0 0;
  h3 {
    flex-basis: 100%;
    text-align: left;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: 13px;
    margin-bottom: 12px;
  }
  span {
    flex-basis: 100%;
    margin-bottom: 16px;
    button {
      cursor: auto;
    }
    button:hover {
      background-color: ${({ theme }) => theme.colors.lightGray};
    }
  }
`;

export const StyledDescription = styled.p`
  font-weight: 400;
  font-size: 13px;
  text-align: left;
  color: ${({ theme }) => theme.colors.gray};
  margin-bottom: 12px;
`;
