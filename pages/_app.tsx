import type { AppContext, AppProps } from 'next/app';

import React, { FC } from 'react';
import { getAll } from '@vercel/edge-config';
import { parseCookies } from 'nookies';
import { PokemonID } from './../data/pokedex';
import { RELEASE_BANNER_VERSION_HIDDEN_COOKIE } from '../data/constants';

import {
  Provider as SettingsProvider,
  Settings as SettingsType,
  getInitialSettings,
} from '../hooks/useSettings';
import { SpeculativePokemonProvider } from '../hooks/useSpeculativePokemon';

import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import AppHeader from '../components/AppHeader';
import AppReleaseBanner from '../components/AppReleaseBanner';
import AppFooter from '../components/AppFooter';

import '../styles/index.css';
import { ThemeProvider } from 'next-themes';
import { Poppins } from 'next/font/google';

const titleFont = Poppins({ weight: '600', subsets: ['latin'] });

type InitialProps = {
  settings: SettingsType;
  releaseBanner: { version: number; shown: boolean; content: string };
  speculativePokemon: PokemonID[];
};

const App: FC<AppProps & InitialProps> & {
  getInitialProps: (arg0: AppContext) => Promise<InitialProps>;
} = ({ Component, pageProps, settings, releaseBanner, speculativePokemon }) => {
  return (
    <React.StrictMode>
      <style jsx global>{`
        :root {
          --font-title: ${titleFont.style.fontFamily};
        }
      `}</style>

      <ThemeProvider
        attribute='class'
        defaultTheme='dark'
        enableColorScheme={true}
        enableSystem={false}
        disableTransitionOnChange={true}
      >
        <SpeculativePokemonProvider value={speculativePokemon}>
          <SettingsProvider initialValue={settings}>
            <Head>
              <title>GOIV.app - Pokémon GO PVP IV Checker</title>
              <meta
                name='description'
                content='Check PVP IV ranks for Great League, Ultra League and Master League simultaneously. Includes support for Best Buddy and Candy XL level caps.'
              />

              <meta name='theme-color' content='#1F2937' />

              <meta property='og:title' content='GOIV.app' />
              <meta
                property='og:description'
                content='Pokémon GO PVP IV Checker'
              />
              <meta property='og:type' content='website' />
              <meta property='og:url' content='https://goiv.app' />
              <meta property='og:image' content='https://goiv.app/og.png' />

              <meta name='mobile-web-app-capable' content='yes' />
              <meta name='apple-mobile-web-app-capable' content='yes' />
            </Head>

            <AppReleaseBanner {...releaseBanner} />

            <AppHeader />

            <section className='flex flex-col items-start justify-start flex-auto w-full min-h-screen px-0 mt-2 mx-auto max-w-8xl sm:px-4 md:px-8'>
              <main className='flex-grow w-full'>
                <Component {...pageProps} />
              </main>

              <AppFooter />
            </section>

            <Analytics />
          </SettingsProvider>
        </SpeculativePokemonProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;

App.getInitialProps = async (appContext: AppContext): Promise<InitialProps> => {
  const settings = getInitialSettings(appContext?.ctx);

  try {
    const config = await getAll<{
      speculative_ids?: PokemonID[];
      release_banner_version?: string;
      release_banner_content?: string;
    }>(['speculative_ids', 'release_banner_version', 'release_banner_content']);

    const speculativePokemon = config.speculative_ids ?? [];

    const releaseBannerVersion = Number(config.release_banner_version);
    if (Number.isNaN(releaseBannerVersion)) {
      throw new Error('No release banner version');
    }

    const releaseBannerContent = config.release_banner_content;
    if (releaseBannerContent === undefined) {
      throw new Error('No release banner content');
    }

    const cookies = parseCookies(appContext?.ctx);
    let releaseBannerVersionHidden = Number(
      cookies[RELEASE_BANNER_VERSION_HIDDEN_COOKIE],
    );
    if (Number.isNaN(releaseBannerVersionHidden)) {
      releaseBannerVersionHidden = -1;
    }

    return {
      settings,
      releaseBanner: {
        version: releaseBannerVersion,
        shown: releaseBannerVersionHidden < releaseBannerVersion,
        content: releaseBannerContent,
      },
      speculativePokemon,
    };
  } catch (err) {
    return {
      settings,
      releaseBanner: {
        version: -1,
        shown: false,
        content: '',
      },
      speculativePokemon: [],
    };
  }
};
