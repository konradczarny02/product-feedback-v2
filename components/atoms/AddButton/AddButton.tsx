import { AddButtonWrapper } from './AddButton.styles';
import Link from 'next/link';

const AddButton = () => {
  return (
    <Link href="/suggestion/add" passHref>
      <AddButtonWrapper>+ Add Feedback</AddButtonWrapper>
    </Link>
  );
};

export default AddButton;
