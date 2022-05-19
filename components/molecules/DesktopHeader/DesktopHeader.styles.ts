import styled from 'styled-components';
import bg from '../../../styles/images/desktop/background-header.png';

export const DesktopHeaderWrapper = styled.header`
  height: 100%;
  width: 230px;
  border-radius: 10px;
  background-image: url('${bg.src}');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding-bottom: 24px;
  padding-left: 24px;
`;