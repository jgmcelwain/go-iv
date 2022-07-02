import 'focus-visible';

import React, { FC } from 'react';

import { AppContext, AppProps } from 'next/app';

import {
  Provider as SettingsProvider,
  Settings as SettingsType,
  getInitialSettings,
} from '../hooks/useSettings';

import Head from 'next/head';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

import '../styles/index.css';

type InitialProps = { settings: SettingsType };

const App: FC<AppProps & InitialProps> & {
  getInitialProps: (arg0: AppContext) => Promise<InitialProps>;
} = ({ Component, pageProps, settings }) => {
  return (
    <React.StrictMode>
      <Head>
        <title>PVPIV.app - Pokémon GO PVP IV Checker</title>
        <meta
          name='description'
          content='Check PVP IV ranks for Great League, Ultra League and Master League simultaneously. Includes support for Best Buddy and Candy XL level caps.'
        />

        <meta name='theme-color' content='#1F2937' />

        <meta property='og:title' content='PVPIV.app' />
        <meta property='og:description' content='Pokémon GO PVP IV Checker' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://pvpiv.app' />
        <meta property='og:image' content='https://pvpiv.app/og.png' />
      </Head>

      <AppHeader />

      <SettingsProvider initialValue={settings}>
        <section className='flex flex-col items-start justify-start flex-auto w-full min-h-screen px-0 pt-20 mx-auto max-w-8xl sm:px-4 md:px-8'>
          <main className='flex-grow w-full'>
            <Component {...pageProps} />
          </main>

          <AppFooter />
        </section>
      </SettingsProvider>
    </React.StrictMode>
  );
};

export default App;

// eslint-disable-next-line @typescript-eslint/require-await
App.getInitialProps = async (appContext: AppContext): Promise<InitialProps> => {
  const settings = getInitialSettings(appContext?.ctx);

  return { settings };
};
