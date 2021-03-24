import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import GlobalStyles from 'styles/global';
import theme from 'styles/theme';
import store from 'store';

import '@material/react-snackbar/dist/snackbar.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyles />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
