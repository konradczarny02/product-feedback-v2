import styled from 'styled-components';

export const ModalBackground = styled.div`
  ::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    opacity: 0.5;
    background-color: #000;
    z-index: 22;
  }
`;

export const ModalWrapper = styled.div`
  width: 30%;
  height: 350px;
  min-width: 250px;
  border-radius: 8px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 222;
`;

export const CloseButton = styled.button`
  flex-basis: 100%;
  display: flex;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkBlue};
  border-radius: 8px;
  border: none;
  font-size: 13px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
