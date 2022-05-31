import prisma from '../../lib/prisma';
import Suggestion from '../../components/molecules/Suggestion/Suggestion';
import styled from 'styled-components';
import AddComment from '../../components/molecules/AddComment/AddComment';
import ReturnHome from '../../components/atoms/ReturnHome/ReturnHome';
import EditFeedback from '../../components/atoms/EditFeedback/EditFeedback';
import CommentsSection from '../../components/organisms/CommentsSection/CommentsSection';
import { suggestionResponse } from '../../types/types';

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

const SuggestionPage = ({ suggestion, comments, id }) => {
  return (
    <Wrapper>
      <LinkWrapper>
        <ReturnHome />
        <EditFeedback href={`/suggestion/edit/${id}`} />
      </LinkWrapper>
      <Suggestion data={suggestion} />
      <CommentsSection comments={comments} />
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
  const comments = await prisma.comment.findMany({
    where: {
      suggestionId: id,
    },
    include: {
      user: {
        select: {
          firstName: true,
          lastName: true,
          userName: true,
        },
      },
    },
  });

  return {
    props: {
      suggestion,
      comments,
      id,
    },
  };
};

export default SuggestionPage;
