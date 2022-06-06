import { SidebarWrapper } from './Sidebar.styles';
import { NavigationContext } from '../../../providers/NavigationProvider';
import { useContext } from 'react';
import Filters from '../../molecules/Filters/Filters';
import RoadmapLink from '../../molecules/RoadmapLink/RoadmapLink';
import SignOut from '../../atoms/SignOut/SignOut';
import { AuthContext } from '../../../providers/AuthProvider';
import SignIn from '../../atoms/SignIn/SignIn';

const Sidebar = () => {
  const { isOpen } = useContext(NavigationContext);
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <SidebarWrapper isOpen={isOpen}>
      <Filters />
      <RoadmapLink />
      {isAuthenticated ? <SignOut /> : <SignIn />}
    </SidebarWrapper>
  );
};

export default Sidebar;
