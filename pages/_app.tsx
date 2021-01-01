import React from 'react';
import Head from 'next/head';

import '../styles/index.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>pvpiv.app - Pokémon GO PVP IV Checker</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
}
