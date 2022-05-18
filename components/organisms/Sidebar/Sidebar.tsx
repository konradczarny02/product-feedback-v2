import { SidebarWrapper } from './Sidebar.styles';
import { NavigationContext } from '../../../providers/NavigationProvider';
import { useContext } from 'react';
import Filters from '../../molecules/Filters/Filters';
import RoadmapLink from '../../molecules/RoadmapLink/RoadmapLink';

const Sidebar = () => {
  const { isOpen } = useContext(NavigationContext);
  return (
    <SidebarWrapper isOpen={isOpen}>
      <Filters />
      <RoadmapLink />
    </SidebarWrapper>
  );
};

export default Sidebar;
