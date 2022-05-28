import { NavigationWrapper } from './RoadmapNavigation.styles';
import { Status } from '../../../types/types';

type Props = {
  plannedNum: number;
  liveNum: number;
  inProgressNum: number;
  active: Status;
  handleSetActive: (value: Status) => void;
};

const RoadmapNavigation = ({ plannedNum, liveNum, inProgressNum, active, handleSetActive }: Props) => {
  return (
    <NavigationWrapper active={active}>
      <div onClick={() => handleSetActive('Planned')}>
        <h3>Planned ({plannedNum})</h3>
        <p>Ideas prioritized for research</p>
      </div>
      <div onClick={() => handleSetActive('In-Progress')}>
        <h3>In-Progress ({inProgressNum})</h3>
        <p>Currently being developed</p>
      </div>
      <div onClick={() => handleSetActive('Live')}>
        <h3>Live ({liveNum})</h3>
        <p>Released features</p>
      </div>
    </NavigationWrapper>
  );
};

export default RoadmapNavigation;
