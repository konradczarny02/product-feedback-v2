import { AddButtonWrapper } from './AddButton.styles';
import Link from 'next/link';

const AddButton = () => {
  return (
    <Link href="/add-suggestion" passHref>
      <AddButtonWrapper>+ Add Feedback</AddButtonWrapper>
    </Link>
  );
};

export default AddButton;
