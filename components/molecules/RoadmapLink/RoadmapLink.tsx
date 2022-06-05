import RoadmapStatus from '../../atoms/RoadmapStatus/RoadmapStatus';
import Link from 'next/link';
import { RoadmapWrapper } from './RoadmapLink.styles';
import { useEffect, useState } from 'react';
import fetcher from '../../../lib/fetcher';

const RoadmapLink = () => {
  const [status, setStatus] = useState({});

  useEffect(() => {
    fetcher('/suggestion/status')
      .then((res) => res.json())
      .then((data) => setStatus(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <RoadmapWrapper>
      <Link href="/roadmap">View</Link>
      <RoadmapStatus statusName="Planned" statusNumber={status['Planned']} />
      <RoadmapStatus statusName="In-Progress" statusNumber={status['In-Progress']} />
      <RoadmapStatus statusName="Live" statusNumber={status['Live']} />
    </RoadmapWrapper>
  );
};

export default RoadmapLink;
