import { StatusWrapper } from './RoadmapStatus.styles';

type StatusProps = {
  statusName: 'Planned' | 'In-Progress' | 'Live';
  statusNumber: number;
};

const RoadmapStatus = ({ statusName, statusNumber }: StatusProps) => {
  return (
    <StatusWrapper statusName={statusName}>
      <span></span>
      <p>{statusName}</p>
      <span>{statusNumber}</span>
    </StatusWrapper>
  );
};

export default RoadmapStatus;
