import { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/GlobalStyles';
import '../styles/fonts.css';
import store from '../store/store';
import { Provider } from 'react-redux';
import AuthProvider from '../providers/AuthProvider';
import Head from 'next/head';
import ModalProvider, { ModalContext } from '../providers/ModalProvider';

function MyApp({ Component, pageProps }: AppProps) {
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
              <Component {...pageProps} />
            </AuthProvider>
          </ModalProvider>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
