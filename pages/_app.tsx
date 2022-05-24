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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Feedback App</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <AuthProvider>
            <GlobalStyles />
            <Modal />
            <Component {...pageProps} />
          </AuthProvider>
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
