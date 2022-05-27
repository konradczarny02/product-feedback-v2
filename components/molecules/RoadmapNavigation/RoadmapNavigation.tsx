import { NavigationWrapper } from './RoadmapNavigation.styles';
import { useState } from 'react';
import { Status } from '../../../types/types';

const RoadmapNavigation = () => {
  const [active, setActive] = useState<Status>('Planned');
  return (
    <NavigationWrapper active={active}>
      <div onClick={() => setActive('Planned')}>
        <h3>Planned (2)</h3>
        <p>Ideas prioritized for research</p>
      </div>
      <div onClick={() => setActive('In-Progress')}>
        <h3>In-Progress (3)</h3>
        <p>Currently being developed</p>
      </div>
      <div onClick={() => setActive('Live')}>
        <h3>Live (1)</h3>
        <p>Released features</p>
      </div>
    </NavigationWrapper>
  );
};

export default RoadmapNavigation;
