import { SessionProvider } from 'next-auth/react';
import '../scss/bootstrap.css';
import '../scss/main.scss';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
