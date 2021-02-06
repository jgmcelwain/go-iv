import 'focus-visible';

import React, { FunctionComponent } from 'react';

import Head from 'next/head';
import { AppContext, AppProps } from 'next/app';

import {
  Provider as SettingsContextProvider,
  Settings,
  getInitialSettings,
} from '../hooks/useSettings';
import { Provider as SettingsShownProvider } from '../hooks/useSettingsShown';

import Header from '../components/Header';

import '../styles/index.css';

type InitialProps = { settings: Settings };

const App: FunctionComponent<AppProps & InitialProps> & {
  getInitialProps: (arg0: AppContext) => Promise<InitialProps>;
} = ({ Component, pageProps, settings }) => {
  return (
    <SettingsContextProvider initialValue={settings}>
      <SettingsShownProvider>
        <Head>
          <title>PVPIV.app - Pokémon GO PVP IV Checker</title>
          <meta
            name='description'
            content='Check PVP IV ranks for Great League, Ultra League and Master League simultaneously. Includes support for Best Buddy and Candy XL level caps.'
          />
        </Head>

        <>
          <Header />

          <Component {...pageProps} />
        </>
      </SettingsShownProvider>
    </SettingsContextProvider>
  );
};

export default App;

App.getInitialProps = async (appContext: AppContext): Promise<InitialProps> => {
  const settings = getInitialSettings(appContext?.ctx);

  return { settings };
};
