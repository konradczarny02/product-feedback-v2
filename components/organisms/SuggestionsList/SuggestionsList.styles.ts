import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 16px auto 48px;
  width: 90%;
  list-style: none;
  @media (min-width: 768px) {
    max-width: 900px;
  }
  @media (min-width: 1440px) {
    grid-column: 2/3;
  }
`;
