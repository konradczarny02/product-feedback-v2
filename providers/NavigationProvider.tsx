import { createContext, useState, ReactNode, useCallback, useMemo } from 'react';
import { PropsChildren } from '../types/types';

interface INavigationContext {
  isOpen: boolean;
  handleOpen: () => void;
}

export const NavigationContext = createContext<INavigationContext>({
  isOpen: false,
  handleOpen: () => {},
});

const NavigationProvider = ({ children }: PropsChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = useCallback(() => setIsOpen((prevState) => !prevState), []);

  const context = useMemo(
    (): INavigationContext => ({
      isOpen,
      handleOpen,
    }),
    [isOpen, handleOpen]
  );

  return <NavigationContext.Provider value={context}>{children}</NavigationContext.Provider>;
};

export default NavigationProvider;
