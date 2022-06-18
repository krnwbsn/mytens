import '../styles/globals.css';
import Head from 'next/head';
import { wrapper } from 'store';
import dynamic from 'next/dynamic';

const ProgressBar = dynamic(() => import('@components/ProgressBar'), {
  ssr: false,
});

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>My Tens</title>
      <meta name="description" content="My Tens Github Api" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <Component {...pageProps} />
    <ProgressBar />
  </>
);

export default wrapper.withRedux(MyApp);
