import { useState, createContext } from 'react';
import { PropsChildren } from '../types/types';

interface ModalContextInterface {
  isOpen: boolean;
  handleModalOpen: () => void;
  handleModalClose: () => void;
}

export const ModalContext = createContext<ModalContextInterface>({
  isOpen: false,
  handleModalClose: () => {},
  handleModalOpen: () => {},
});

const ModalProvider = ({ children }: PropsChildren) => {
  const [isOpen, setModalState] = useState<boolean>(false);
  const handleModalClose = () => setModalState(false);
  const handleModalOpen = () => setModalState(true);
  console.log(isOpen);

  return <ModalContext.Provider value={{ isOpen, handleModalClose, handleModalOpen }}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
