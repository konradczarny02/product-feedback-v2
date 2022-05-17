import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.colors.pink};
`;

const Home = () => {
  return (
    <Wrapper>
      <h2>hi</h2>
      <h3>World</h3>
    </Wrapper>
  );
};

export default Home;
