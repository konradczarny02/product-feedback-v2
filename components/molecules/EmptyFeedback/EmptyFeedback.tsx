import { Wrapper } from './EmptyFeedback.styles';
import Image from 'next/image';
import AddButton from '../../atoms/AddButton/AddButton';

const EmptyFeedback = () => {
  return (
    <Wrapper>
      <Image src="/emptyIcon.png" alt="Empty Feedback" />
      <h3>There is no feedback yet</h3>
      <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
      <AddButton />
    </Wrapper>
  );
};

export default EmptyFeedback;
