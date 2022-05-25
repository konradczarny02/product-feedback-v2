import styled from 'styled-components';
import ReturnHome from '../../components/atoms/ReturnHome/ReturnHome';
import CreateForm from '../../components/organisms/Forms/CreateForm';

export const Wrapper = styled.div`
  @media (min-width: 768px) {
    width: 550px;
    margin: 0 auto;
  }
`;

export const PopUp = styled.div`
  width: 90%;
  position: absolute;
  bottom: 0;
  left: 5%;
  border-radius: 10px;
  border: 2px solid green;
  padding: 20px;
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
