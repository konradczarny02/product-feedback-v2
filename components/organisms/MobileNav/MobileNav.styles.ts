import styled from 'styled-components';
import bg from '../../../styles/images/mobile/background-header.png';

export const NavWrapper = styled.nav`
  padding: 16px 10%;
  width: 100%;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url('${bg.src}');
  background-size: cover;
  @media (min-width: 768px) {
    display: none;
  }
`;
