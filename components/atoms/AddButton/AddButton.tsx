import { AddButtonWrapper } from './AddButton.styles';
import Link from 'next/link';
import { AuthContext } from '../../../providers/AuthProvider';
import { useContext } from 'react';

const AddButton = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <Link href={isAuthenticated ? '/suggestion/add' : '/signin'} passHref>
      <AddButtonWrapper>+ Add Feedback</AddButtonWrapper>
    </Link>
  );
};

export default AddButton;
