import { RoadmapHeaderWrapper } from './Roadmap.styles';
import ReturnHome from '../../atoms/ReturnHome/ReturnHome';
import AddButton from '../../atoms/AddButton/AddButton';

const RoadMapHeader = () => {
  return (
    <RoadmapHeaderWrapper>
      <div>
        <ReturnHome />
        <h2>Roadmap</h2>
      </div>
      <AddButton />
    </RoadmapHeaderWrapper>
  );
};

export default RoadMapHeader;
