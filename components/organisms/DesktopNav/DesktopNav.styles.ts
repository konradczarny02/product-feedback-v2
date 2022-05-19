import styled from 'styled-components';

export const DesktopNavWrapper = styled.nav`
  display: none;
  @media (min-width: 768px) {
    width: 90%;
    max-width: 900px;
    height: 180px;
    margin: 60px auto 0;
    display: flex;
    justify-content: space-between;
    & > * {
      flex-basis: 32%;
    }
  }
  @media (min-width: 1440px) {
    flex-direction: column;
    width: 260px;
    height: 550px;
    grid-column: 1/2;
    grid-row: 1/3;
    margin-top: 0;
    & > * {
      width: 260px;
    }
  }
`;
