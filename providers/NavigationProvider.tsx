import { createContext, useState, ReactNode } from 'react';
import { PropsChildren } from '../types/types';

interface NavigationContextI {
  isOpen: boolean;
  handleOpen: () => void;
}

export const NavigationContext = createContext<NavigationContextI>({
  isOpen: false,
  handleOpen: () => {},
});

const NavigationProvider = ({ children }: PropsChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen((prevState) => !prevState);
  console.log(isOpen);

  return <NavigationContext.Provider value={{ isOpen, handleOpen }}>{children}</NavigationContext.Provider>;
};

export default NavigationProvider;
