import styled from 'styled-components';

export const FiltersWrapper = styled.div`
  width: 230px;
  height: 180px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
  margin-top: 24px;
  padding: 24px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  & > * {
    margin: 0 4px;
  }
  @media (min-width: 768px) {
    height: 100%;
    margin-top: 0;
  }
`;
