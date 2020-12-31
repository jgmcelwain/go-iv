import React, { FunctionComponent } from 'react';
import Head from 'next/head';

import Main from '../components/Main';

const IndexPage: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>pvpiv.app - Pokémon GO PVP IV Checker</title>
      </Head>

      <Main />
    </>
  );
};

export default IndexPage;
