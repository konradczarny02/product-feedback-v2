import { prisma } from '../lib/prisma';
import RoadMapHeader from '../components/molecules/RoadmapHeader/RoadMapHeader';
import RoadmapNavigation from '../components/molecules/RoadmapNavigation/RoadmapNavigation';
import RoadmapList from '../components/organisms/RoadmapList/RoadmapList';
import { useCallback, useContext, useState } from 'react';
import { ISuggestionResponse, Status } from '../types/types';
import { ModalContext } from '../providers/ModalProvider';
import Modal from '../components/organisms/Modal/Modal';
import SignModal from '../components/molecules/ModalContent/SignModal';

const filterArr = (arr: ISuggestionResponse[], filterName: Status) => {
  return arr.filter((item) => item.status === filterName);
};

type Props = {
  suggestions: ISuggestionResponse[];
};

const Roadmap = ({ suggestions }: Props) => {
  const { isOpen } = useContext(ModalContext);
  const [active, setActive] = useState<Status>('Planned');
  const handleSetActive = useCallback((value: Status) => {
    setActive(value);
  }, []);
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
      upvotes: true,
    },
  });

  return {
    props: { suggestions },
  };
};

export default Roadmap;
