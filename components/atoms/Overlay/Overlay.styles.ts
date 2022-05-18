import styled from 'styled-components';

interface OverlayProps {
  isOpen: boolean;
}

export const StyledOverlay = styled.div<OverlayProps>`
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  left: 0;
  top: 72px;
  height: calc(100vh - 72px);
  z-index: 1;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: ${({ isOpen }) => (isOpen ? 'visibility 0s' : 'visibility 0s 0.4s')};
  @media (min-width: 768px) {
    display: none;
  }
`;
