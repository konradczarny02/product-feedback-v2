import prisma from '../lib/prisma';
import RoadMapHeader from '../components/molecules/RoadmapHeader/RoadMapHeader';
import RoadmapNavigation from '../components/molecules/RoadmapNavigation/RoadmapNavigation';
import RoadmapList from '../components/organisms/RoadmapList/RoadmapList';
import { useState } from 'react';
import { Status } from '../types/types';

const Roadmap = ({ suggestions }) => {
  const [active, setActive] = useState<Status>('Planned');
  const handleSetActive = (value: Status) => {
    setActive(value);
  };
  const filterArr = (arr, filterName) => {
    return arr.filter((item) => item.status === filterName);
  };
  const live = filterArr(suggestions, 'Live');
  const planned = filterArr(suggestions, 'Planned');
  const progress = filterArr(suggestions, 'In-Progress');
  return (
    <>
      <RoadMapHeader />
      <RoadmapNavigation
        plannedNum={planned.length}
        inProgressNum={progress.length}
        liveNum={live.length}
        active={active}
        handleSetActive={handleSetActive}
      />
      <RoadmapList plannedSuggestions={planned} inProgressSuggestions={progress} liveSuggestions={live} active={active} />
    </>
  );
};

export const getServerSideProps = async () => {
  const suggestions = await prisma.suggestion.findMany({});

  return {
    props: { suggestions },
  };
};

export default Roadmap;
