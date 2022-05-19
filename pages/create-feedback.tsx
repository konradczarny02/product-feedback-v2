import styled from 'styled-components';
import ReturnHome from '../components/atoms/ReturnHome/ReturnHome';
import CreateForm from '../components/organisms/Forms/CreateForm';

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    width: 550px;
    margin: 0 auto;
  }
`;

const CreateFeedback = () => {
  return (
    <Wrapper>
      <ReturnHome />
      <CreateForm />
    </Wrapper>
  );
};

export default CreateFeedback;
