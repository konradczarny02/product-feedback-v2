import { Wrapper } from './DeleteModal.styles';
import { useContext } from 'react';
import { ModalContext } from '../../../providers/ModalProvider';
import fetcher from '../../../lib/fetcher';
import { useRouter } from 'next/router';

type Props = {
  title: string;
};

const DeleteModal = ({ title }: Props) => {
  const { handleModalClose } = useContext(ModalContext);
  const router = useRouter();
  const handleDelete = async () => {
    const res = await fetcher('/suggestion/delete', { title });
    setTimeout(() => {
      router.push('/');
    }, 1000);
  };

  return (
    <Wrapper>
      <h3>Are you sure?</h3>
      <div>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleModalClose}>Close</button>
      </div>
    </Wrapper>
  );
};

export default DeleteModal;
