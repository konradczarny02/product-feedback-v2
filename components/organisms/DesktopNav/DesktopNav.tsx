import { DesktopNavWrapper } from './DesktopNav.styles';
import Filters from '../../molecules/Filters/Filters';
import RoadmapLink from '../../molecules/RoadmapLink/RoadmapLink';
import DesktopHeader from '../../molecules/DesktopHeader/DesktopHeader';

const DesktopNav = () => {
  return (
    <DesktopNavWrapper>
      <DesktopHeader />
      <Filters />
      <RoadmapLink />
    </DesktopNavWrapper>
  );
};

export default DesktopNav;
