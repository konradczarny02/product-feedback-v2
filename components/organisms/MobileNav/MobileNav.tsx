import { NavWrapper } from './MobileNav.styles';
import CompanyName from '../../atoms/CompanyName/CompanyName';
import Hamburger from '../../atoms/Hamburger/Hamburger';

const MobileNav = () => {
  return (
    <NavWrapper>
      <CompanyName />
      <Hamburger />
    </NavWrapper>
  );
};

export default MobileNav;
