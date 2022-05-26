import prisma from '../../../lib/prisma';
import EditForm from '../../../components/organisms/Forms/EditForm';
import styled from 'styled-components';
import ReturnHome from '../../../components/atoms/ReturnHome/ReturnHome';

export const Wrapper = styled.div`
  height: 100%;
  width: 90%;
  margin: 24px auto;
  max-width: 600px;
`;

const Edit = ({ suggestion }) => {
  return (
    <Wrapper>
      <ReturnHome />
      <EditForm suggestion={suggestion} />
    </Wrapper>
  );
};

export const getServerSideProps = async (context) => {
  let id: number = +context.params.id;
  const suggestion = await prisma.suggestion.findUnique({
    where: {
      id,
    },
  });

  return {
    props: {
      suggestion,
    },
  };
};

export default Edit;
