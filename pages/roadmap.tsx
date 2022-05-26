import prisma from '../lib/prisma';

const Roadmap = ({ suggestion }) => {
  return <h1>Hello World</h1>;
};

export const getServerSideProps = async () => {
  const suggestions = await prisma.suggestion.findMany({});

  return {
    props: { suggestions },
  };
};

export default Roadmap;
