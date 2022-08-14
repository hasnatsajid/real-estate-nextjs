import { SessionProvider } from 'next-auth/react';
import '../scss/bootstrap.css';
import '../scss/main.scss';

import { store } from '../store';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}

export default MyApp;
