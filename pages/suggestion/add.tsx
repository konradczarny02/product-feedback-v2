import styled from 'styled-components';
import ReturnHome from '../../components/atoms/ReturnHome/ReturnHome';
import CreateForm from '../../components/organisms/Forms/CreateForm';

export const Wrapper = styled.div`
  width: 90%;
  margin: 24px auto;
  max-width: 600px;
`;

const Add = () => {
  return (
    <Wrapper>
      <ReturnHome />
      <CreateForm />
    </Wrapper>
  );
};

export default Add;
