import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ModalWrapper, ModalBackground } from './Modal.styles';
import Link from 'next/link';

type ModalProps = {
  handleModalOpen: () => void;
  handleModalClose: () => void;
};

const Modal = ({ handleModalClose, handleModalOpen }: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false);
  let modalNode: null | HTMLDivElement = null;
  let modalContainer: null | HTMLDivElement = null;
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (isBrowser) {
    modalNode = document.createElement('div');
    modalContainer = document.getElementById('modal-root') as HTMLDivElement;
  }

  useEffect(() => {
    if (modalContainer) modalContainer.appendChild(modalNode);
    return () => {
      if (modalNode) modalContainer.removeChild(modalNode);
    };
  }, [modalNode, modalContainer]);

  if (isBrowser) {
    return createPortal(
      <ModalBackground>
        <ModalWrapper>
          <Link href="/signin">Sign In</Link>
          <p>Or</p>
          <Link href="/signup">Sign Up</Link>
          <button onClick={handleModalClose}>Close</button>
        </ModalWrapper>
      </ModalBackground>,
      modalNode
    );
  } else {
    return null;
  }
};

export default Modal;
