import prisma from '../../lib/prisma';
import Suggestion from '../../components/molecules/Suggestion/Suggestion';
import styled from 'styled-components';
import AddComment from '../../components/molecules/AddComment/AddComment';
import ReturnHome from '../../components/atoms/ReturnHome/ReturnHome';
import EditFeedback from '../../components/atoms/EditFeedback/EditFeedback';

export const Wrapper = styled.div`
  width: 90%;
  height: 100vh;
  margin: auto;
  max-width: 1000px;
`;

export const LinkWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

const SuggestionPage = ({ suggestion, id }) => {
  return (
    <Wrapper>
      <LinkWrapper>
        <ReturnHome />
        <EditFeedback href={`/suggestion/edit/${id}`} />
      </LinkWrapper>
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
      id,
    },
  };
};

export default SuggestionPage;
