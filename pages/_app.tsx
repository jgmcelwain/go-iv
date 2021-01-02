import React from 'react';
import Head from 'next/head';

import '../styles/index.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>pvpiv.app - Pokémon GO PVP IV Checker</title>
        <meta
          name='description'
          content='Check PVP IV ranks for Great League, Ultra League and Master League simultaneously.'
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
