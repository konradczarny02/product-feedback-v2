import styled from 'styled-components';
import NavigationProvider from '../providers/NavigationProvider';

export const Wrapper = styled.div`
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 250px 900px;
    grid-template-rows: 96px 1fr;
    margin: 96px auto 0;
    width: 1150px;
  }
`;

const Home = () => {
  return (
    <Wrapper>
      <NavigationProvider></NavigationProvider>
    </Wrapper>
  );
};

export default Home;
