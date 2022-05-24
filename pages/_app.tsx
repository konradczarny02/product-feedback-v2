import { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/GlobalStyles';
import '../styles/fonts.css';
import store from '../store/store';
import { Provider } from 'react-redux';
import AuthProvider from '../providers/AuthProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <AuthProvider>
          <GlobalStyles />
          <Component {...pageProps} />
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp;
