import styled from 'styled-components';

interface SidebarWrapperInterface {
  isOpen: boolean;
}

export const SidebarWrapper = styled.div<SidebarWrapperInterface>`
  width: 270px;
  height: calc(100% - 72px);
  position: absolute;
  top: 72px;
  right: -270px;
  background-color: ${({ theme }) => theme.colors.darkerWhite};
  transform: translateX(${({ isOpen }) => (isOpen ? '-100%' : '0')});
  transition: transform 0.4s linear;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`;
