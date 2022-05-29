import prisma from '../../../lib/prisma';
import EditForm from '../../../components/organisms/Forms/EditForm';
import styled from 'styled-components';
import ReturnHome from '../../../components/atoms/ReturnHome/ReturnHome';
import { useContext } from 'react';
import { ModalContext } from '../../../providers/ModalProvider';
import Modal from '../../../components/organisms/Modal/Modal';
import DeleteModal from '../../../components/molecules/ModalContent/DeleteModal';

export const Wrapper = styled.div`
  height: 100%;
  width: 90%;
  margin: 24px auto;
  max-width: 600px;
`;

const Edit = ({ suggestion }) => {
  const { isOpen } = useContext(ModalContext);
  return (
    <Wrapper>
      <ReturnHome />
      <EditForm suggestion={suggestion} />
      {isOpen ? (
        <Modal>
          <DeleteModal title={suggestion.title} />
        </Modal>
      ) : null}
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

export default Edit;
