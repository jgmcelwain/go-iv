import React, { FunctionComponent } from 'react';

import { CookiesProvider } from 'react-cookie';

import { Wrapper as SubjectContextWrapper } from '../components/SubjectContext';
import { Wrapper as SettingsContextWrapper } from '../components/SettingsContext';
import { Wrapper as SettingsShownContextWrapper } from '../components/SettingsShownContext';

import {
  Settings as SettingsType,
  getInitialSettings,
} from '../hooks/useSettings';
import { Subject as SubjectType, getInitialSubject } from '../hooks/useSubject';

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
      <SettingsContextWrapper initialValue={props.settings}>
        <SubjectContextWrapper initialValue={props.subject}>
          <SettingsShownContextWrapper>
            <Header />

            <div className='container mx-auto px-0 sm:px-4'>
              <SubjectBuilder />

              <LeagueGrid />

              <Footer />

              <Settings />
            </div>
          </SettingsShownContextWrapper>
        </SubjectContextWrapper>
      </SettingsContextWrapper>
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
