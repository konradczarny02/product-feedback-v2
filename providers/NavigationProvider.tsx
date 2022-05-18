import { createContext, useState, ReactNode } from 'react';

interface NavigationContextI {
  isOpen: boolean;
  handleOpen: () => void;
}

type Props = {
  children: ReactNode;
};

export const NavigationContext = createContext<NavigationContextI>({ isOpen: false, handleOpen: () => {} });

const NavigationProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen((prevState) => !prevState);

  return <NavigationContext.Provider value={{ isOpen, handleOpen }}>{children}</NavigationContext.Provider>;
};

export default NavigationProvider;
