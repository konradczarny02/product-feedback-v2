import prisma from '../../lib/prisma';
import Suggestion from '../../components/molecules/Suggestion/Suggestion';
import styled from 'styled-components';
import AddComment from '../../components/molecules/AddComment/AddComment';
import ReturnHome from '../../components/atoms/ReturnHome/ReturnHome';
import EditFeedback from '../../components/atoms/EditFeedback/EditFeedback';
import CommentsSection from '../../components/organisms/CommentsSection/CommentsSection';
import { useContext } from 'react';
import { ModalContext } from '../../providers/ModalProvider';
import Modal from '../../components/organisms/Modal/Modal';
import SignModal from '../../components/molecules/ModalContent/SignModal';

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

const SuggestionPage = ({ suggestion, comments, id, commentsNum }) => {
  const { isOpen } = useContext(ModalContext);
  return (
    <Wrapper>
      <LinkWrapper>
        <ReturnHome />
        <EditFeedback href={`/suggestion/edit/${id}`} />
      </LinkWrapper>
      <Suggestion data={suggestion} />
      {comments.length ? <CommentsSection comments={comments} num={commentsNum} /> : null}
      <AddComment suggestionId={id} />
      {isOpen ? (
        <Modal>
          <SignModal />
        </Modal>
      ) : null}
    </Wrapper>
  );
};

export const getServerSideProps = async (context) => {
  let id: number = parseInt(context.params.id);
  const suggestion = await prisma.suggestion.findUnique({
    where: {
      id,
    },
    include: {
      comments: true,
      upvotes: true,
    },
  });
  const comments = await prisma.comment.findMany({
    where: {
      suggestionId: id,
      parentId: null,
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

  const commentsNum = await prisma.comment.count({
    where: {
      suggestionId: id,
    },
  });

  return {
    props: {
      suggestion,
      comments,
      id,
      commentsNum,
    },
  };
};

export default SuggestionPage;
