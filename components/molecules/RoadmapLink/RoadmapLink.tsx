import RoadmapStatus from '../../atoms/RoadmapStatus/RoadmapStatus';
import Link from 'next/link';
import { RoadmapWrapper } from './RoadmapLink.styles';

const RoadmapLink = () => {
  return (
    <RoadmapWrapper>
      <Link href="/roadmap">View</Link>
      <RoadmapStatus statusName="Planned" statusNumber={3} />
      <RoadmapStatus statusName="In-Progress" statusNumber={2} />
      <RoadmapStatus statusName="Live" statusNumber={1} />
    </RoadmapWrapper>
  );
};

export default RoadmapLink;
