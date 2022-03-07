import '../styles/globals.scss';
import type { AppProps } from 'next/app';

function DemokratieApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default DemokratieApp;
