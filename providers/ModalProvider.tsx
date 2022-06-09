import { useState, createContext, useCallback } from 'react';
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
  const handleModalClose = useCallback(() => setModalState(false), []);
  const handleModalOpen = useCallback(() => setModalState(true), []);

  return <ModalContext.Provider value={{ isOpen, handleModalClose, handleModalOpen }}>{children}</ModalContext.Provider>;
};

export default ModalProvider;
