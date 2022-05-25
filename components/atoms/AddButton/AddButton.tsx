import { AddButtonWrapper } from './AddButton.styles';
import Link from 'next/link';
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext } from 'react';
import { ModalContext } from '../../../providers/ModalProvider';

const AddButton = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const { handleModalOpen } = useContext(ModalContext);
  return (
    <Link href={isAuthenticated ? '/suggestion/add' : '/signin'} passHref>
      <AddButtonWrapper>+ Add Feedback</AddButtonWrapper>
    </Link>
  );
};

export default AddButton;
