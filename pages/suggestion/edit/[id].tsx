import { prisma } from '../../../lib/prisma';
import EditForm from '../../../components/organisms/Forms/EditForm';
import styled from 'styled-components';
import ReturnHome from '../../../components/atoms/ReturnHome/ReturnHome';
import { useContext } from 'react';
import { ModalContext } from '../../../providers/ModalProvider';
import Modal from '../../../components/organisms/Modal/Modal';
import DeleteModal from '../../../components/molecules/ModalContent/DeleteModal';
import { ISuggestionResponse } from '../../../types/types';

type Props = {
  suggestion: ISuggestionResponse;
};

const Edit = ({ suggestion }: Props) => {
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

export const getServerSideProps = async (context: { params: { id: string | number } }) => {
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

export const Wrapper = styled.div`
  height: 100%;
  width: 90%;
  margin: 24px auto;
  max-width: 600px;
`;

export default Edit;
