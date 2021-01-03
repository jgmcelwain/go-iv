import React, { FunctionComponent } from 'react';

import { CookiesProvider } from 'react-cookie';

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
import { Wrapper as SettingsShownContextWrapper } from '../components/SettingsShownContext';

import Header from '../components/Header';
import SubjectBuilder from '../components/SubjectBuilder';
import LeagueGrid from '../components/LeagueGrid';
import Footer from '../components/Footer';
import Settings from '../components/Settings';

const IndexPage: FunctionComponent<{
  settings: SettingsType;
  subject: SubjectType;
}> = (props) => {
  return (
    <CookiesProvider>
      <SettingsContextProvider initialValue={props.settings}>
        <SubjectContextProvider initialValue={props.subject}>
          <SettingsShownContextWrapper>
            <Header />

            <div className='container mx-auto px-0 sm:px-4'>
              <SubjectBuilder />

              <LeagueGrid />

              <Footer />

              <Settings />
            </div>
          </SettingsShownContextWrapper>
        </SubjectContextProvider>
      </SettingsContextProvider>
    </CookiesProvider>
  );
};

export default IndexPage;

export async function getServerSideProps({
  req,
  query,
}): Promise<{ props: { settings: SettingsType; subject: SubjectType } }> {
  const settings = getInitialSettings(req.cookies.settings);
  const subject = getInitialSubject(query.subject);

  return { props: { settings, subject } };
}
