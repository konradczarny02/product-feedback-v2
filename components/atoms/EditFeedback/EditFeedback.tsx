import { EditWrapper } from './EditFeedback.styles';

type Props = {
  href: string;
};

const EditFeedback = ({ href }: Props) => {
  return <EditWrapper href={href}>Edit Feedback</EditWrapper>;
};

export default EditFeedback;
