import { Wrapper } from './EmptyFeedback.styles';
import AddButton from '../../atoms/AddButton/AddButton';
import img from '../../../public/emptyIcon.png';

const EmptyFeedback = () => {
  return (
    <Wrapper>
      <img alt="empty feedback" src={img.src} />
      <h3>There is no feedback yet</h3>
      <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
      <AddButton />
    </Wrapper>
  );
};

export default EmptyFeedback;
