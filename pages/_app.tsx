import React from 'react';
import Head from 'next/head';

import '../styles/index.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>PVPIV.app - Pokémon GO PVP IV Checker</title>
        <meta
          name='description'
          content='Check PVP IV ranks for Great League, Ultra League and Master League simultaneously. Includes support for Best Buddy and Candy XL level caps.'
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
