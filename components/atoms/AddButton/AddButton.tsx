import { AddButtonWrapper } from './AddButton.styles';
import Link from 'next/link';
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext } from 'react';
import { ModalContext } from '../../../providers/ModalProvider';
import { useRouter } from 'next/router';

const AddButton = () => {
  const router = useRouter();
  const { isAuthenticated } = useContext(AuthContext);
  const { handleModalOpen } = useContext(ModalContext);
  return (
    <AddButtonWrapper
      onClick={() => {
        if (isAuthenticated) {
          router.push('/suggestion/add');
        } else {
          handleModalOpen();
        }
      }}
    >
      + Add Feedback
    </AddButtonWrapper>
  );
};

export default AddButton;
