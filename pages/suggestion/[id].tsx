import prisma from '../../lib/prisma';
import Suggestion from '../../components/molecules/Suggestion/Suggestion';
import { StyledList } from '../../components/organisms/SuggestionsList/SuggestionsList.styles';

const SuggestionPage = ({ suggestion }) => {
  return (
    <StyledList>
      <Suggestion data={suggestion} />
    </StyledList>
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

export default SuggestionPage;
