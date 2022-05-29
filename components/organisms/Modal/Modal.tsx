import { useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalWrapper, ModalBackground, CloseButton } from './Modal.styles';
import { ModalContext } from '../../../providers/ModalProvider';
import { PropsChildren } from '../../../types/types';

const Modal = ({ children }: PropsChildren) => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false);
  const { handleModalClose } = useContext(ModalContext);
  let modalNode: null | HTMLDivElement = null;
  let modalContainer: null | HTMLDivElement = null;
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    modalNode = document.createElement('div');
    modalNode.style.height = '100%';
    modalContainer = document.getElementById('modal-root') as HTMLDivElement;
  }

  const modalContent = (
    <ModalBackground onClick={handleModalClose}>
      <ModalWrapper>{children}</ModalWrapper>
    </ModalBackground>
  );

  useEffect(() => {
    if (modalContainer) modalContainer.appendChild(modalNode);
    return () => {
      if (modalNode) modalContainer.removeChild(modalNode);
    };
  }, [modalNode, modalContainer]);

  if (isBrowser) {
    return createPortal(modalContent, modalNode);
  } else {
    return null;
  }
};

export default Modal;
