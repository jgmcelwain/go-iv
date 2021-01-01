import { Head } from 'next/document';
import React from 'react';
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
