import prisma from '../../lib/prisma';
import Suggestion from '../../components/molecules/Suggestion/Suggestion';
import styled from 'styled-components';
import AddComment from '../../components/molecules/AddComment/AddComment';

export const Wrapper = styled.div`
  width: 90%;
  height: 100vh;
  margin: auto;
`;

const SuggestionPage = ({ suggestion }) => {
  return (
    <Wrapper>
      <Suggestion data={suggestion} />
      <AddComment />
    </Wrapper>
  );
};

export const getServerSideProps = async (context) => {
  let id: number = +context.params.id;
  const suggestion = await prisma.suggestion.findUnique({
    where: {
      id,
    },
  });

  return {
    props: {
      suggestion,
    },
  };
};

export default SuggestionPage;
