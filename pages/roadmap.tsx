import prisma from '../lib/prisma';
import RoadMapHeader from '../components/molecules/RoadmapHeader/RoadMapHeader';
import RoadmapNavigation from '../components/molecules/RoadmapNavigation/RoadmapNavigation';

const Roadmap = ({ suggestions }) => {
  const filterArr = (arr, filterName) => {
    return arr.filter((item) => item.status === filterName);
  };
  const live = filterArr(suggestions, 'Live');
  const planned = filterArr(suggestions, 'Planned');
  const progress = filterArr(suggestions, 'In-Progress');
  console.log(live, planned, progress);
  return (
    <>
      <RoadMapHeader />
      <RoadmapNavigation />
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
