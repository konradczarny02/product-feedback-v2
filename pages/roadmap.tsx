import prisma from '../lib/prisma';
import RoadMapHeader from '../components/molecules/RoadmapHeader/RoadMapHeader';
import RoadmapNavigation from '../components/molecules/RoadmapNavigation/RoadmapNavigation';
import RoadmapList from '../components/organisms/RoadmapList/RoadmapList';
import { useContext, useState } from 'react';
import { Status } from '../types/types';
import { ModalContext } from '../providers/ModalProvider';
import Modal from '../components/organisms/Modal/Modal';
import SignModal from '../components/molecules/ModalContent/SignModal';

const Roadmap = ({ suggestions }) => {
  console.log(suggestions);
  const { isOpen } = useContext(ModalContext);
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
      {isOpen ? (
        <Modal>
          <SignModal />
        </Modal>
      ) : null}
    </>
  );
};

export const getServerSideProps = async () => {
  const suggestions = await prisma.suggestion.findMany({
    include: {
      comments: true,
    },
  });

  return {
    props: { suggestions },
  };
};

export default Roadmap;
