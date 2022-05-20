import { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../styles/GlobalStyles';
import '../styles/fonts.css';
import GlobalProvider from '../providers/GlobalProvider';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </GlobalProvider>
    </ThemeProvider>
  );
}

export default MyApp;
