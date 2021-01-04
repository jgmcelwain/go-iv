import React, { FunctionComponent } from 'react';

import {
  getInitialSubject,
  Subject as SubjectType,
  Provider as SubjectContextProvider,
} from '../hooks/useSubject';
import {
  getInitialSettings,
  Settings as SettingsType,
  Provider as SettingsContextProvider,
} from '../hooks/useSettings';
import { Provider as SettingsShownProvider } from '../hooks/useSettingsShown';

import Header from '../components/Header';
import SubjectBuilder from '../components/SubjectBuilder';
import LeagueGrid from '../components/LeagueGrid';
import Footer from '../components/Footer';
import Settings from '../components/Settings';
import { NextPageContext } from 'next';

const IndexPage: FunctionComponent<{
  settings: SettingsType;
  subject: SubjectType;
}> = (props) => {
  return (
    <SettingsContextProvider initialValue={props.settings}>
      <SubjectContextProvider initialValue={props.subject}>
        <SettingsShownProvider>
          <Header />

          <div className='container mx-auto px-0 sm:px-4'>
            <SubjectBuilder />

            <LeagueGrid />

            <Footer />

            <Settings />
          </div>
        </SettingsShownProvider>
      </SubjectContextProvider>
    </SettingsContextProvider>
  );
};

export default IndexPage;

export async function getServerSideProps(
  ctx: NextPageContext,
): Promise<{ props: { settings: SettingsType; subject: SubjectType } }> {
  const settings = getInitialSettings(ctx);
  const subject = getInitialSubject(ctx);

  return { props: { settings, subject } };
}
