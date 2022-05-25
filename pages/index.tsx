import styled from 'styled-components';
import NavigationProvider from '../providers/NavigationProvider';
import MobileNav from '../components/organisms/MobileNav/MobileNav';
import Overlay from '../components/atoms/Overlay/Overlay';
import Sidebar from '../components/organisms/Sidebar/Sidebar';
import DesktopNav from '../components/organisms/DesktopNav/DesktopNav';
import SuggestionsList from '../components/organisms/SuggestionsList/SuggestionsList';
import prisma from '../lib/prisma';
import Sort from '../components/organisms/Sort/Sort';
import { useContext } from 'react';
import { ModalContext } from '../providers/ModalProvider';
import Modal from '../components/organisms/Modal/Modal';

export const Wrapper = styled.div`
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: 250px 900px;
    grid-template-rows: 96px 1fr;
    margin: 96px auto 0;
    width: 1150px;
  }
`;

const Home = ({ suggestions }) => {
  const { isOpen } = useContext(ModalContext);
  console.log(isOpen);
  return (
    <Wrapper>
      <NavigationProvider>
        <MobileNav />
        <Overlay />
        <Sidebar />
      </NavigationProvider>
      <DesktopNav />
      <Sort />
      <SuggestionsList suggestions={suggestions} />
      {isOpen ? <Modal /> : null}
    </Wrapper>
  );
};

export const getServerSideProps = async () => {
  const suggestions = await prisma.suggestion.findMany({});

  return {
    props: { suggestions },
  };
};

export default Home;
