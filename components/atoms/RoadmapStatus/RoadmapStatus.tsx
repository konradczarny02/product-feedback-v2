import { StatusWrapper } from './RoadmapStatus.styles';
import { Status } from '../../../types/types';

type StatusProps = {
  statusName: Status;
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
