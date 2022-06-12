import useRedirect from '../../../lib/useRedirect';
import { AddButtonWrapper } from './AddButton.styles';

const AddButton = () => {
  const { handleRedirect } = useRedirect('/suggestion/add');

  return <AddButtonWrapper onClick={handleRedirect}>+ Add Feedback</AddButtonWrapper>;
};

export default AddButton;
