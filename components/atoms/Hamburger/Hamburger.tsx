import { useContext } from 'react';
import { NavigationContext } from '../../../providers/NavigationProvider';
import { HamburgerWrapper } from './Hamburger.styles';

const Hamburger = () => {
  const { isOpen, handleOpen } = useContext(NavigationContext);
  return (
    <HamburgerWrapper onClick={handleOpen} isOpen={isOpen}>
      <div></div>
      <div></div>
      <div></div>
    </HamburgerWrapper>
  );
};

export default Hamburger;
