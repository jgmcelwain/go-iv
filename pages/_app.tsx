import 'focus-visible';

import React, { FunctionComponent } from 'react';

import { AppContext, AppProps } from 'next/app';

import {
  Provider as SettingsProvider,
  Settings as SettingsType,
  getInitialSettings,
} from '../hooks/useSettings';

import Head from 'next/head';
import AppSidebar from '../components/AppSidebar';

import '../styles/index.css';

type InitialProps = { settings: SettingsType };

const App: FunctionComponent<AppProps & InitialProps> & {
  getInitialProps: (arg0: AppContext) => Promise<InitialProps>;
} = ({ Component, pageProps, settings }) => {
  return (
    <SettingsProvider initialValue={settings}>
      <Head>
        <title>PVPIV.app - Pokémon GO PVP IV Checker</title>
        <meta
          name='description'
          content='Check PVP IV ranks for Great League, Ultra League and Master League simultaneously. Includes support for Best Buddy and Candy XL level caps.'
        />
      </Head>

      <div className='w-full pt-16 pl-0 md:pl-64 md:pt-0'>
        <AppSidebar />

        <main className='flex-auto w-full px-0 pt-4 mx-auto max-w-8xl sm:px-4 md:px-8'>
          <Component {...pageProps} />
        </main>
      </div>
    </SettingsProvider>
  );
};

export default App;

App.getInitialProps = async (appContext: AppContext): Promise<InitialProps> => {
  const settings = getInitialSettings(appContext?.ctx);

  return { settings };
};
