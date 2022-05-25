import { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/GlobalStyles';
import '../styles/fonts.css';
import store from '../store/store';
import { Provider } from 'react-redux';
import AuthProvider from '../providers/AuthProvider';
import Head from 'next/head';
import Modal from '../components/organisms/Modal/Modal';
import ModalProvider, { ModalContext } from '../providers/ModalProvider';
import { useContext, useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const { isOpen, handleModalClose, handleModalOpen } = useContext(ModalContext);

  useEffect(() => {}, [isOpen]);

  return (
    <>
      <Head>
        <title>Feedback App</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <ModalProvider>
            <AuthProvider>
              <GlobalStyles />
              {isOpen ? <Modal handleModalClose={handleModalClose} handleModalOpen={handleModalOpen} /> : null}
              <Component {...pageProps} />
            </AuthProvider>
          </ModalProvider>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
