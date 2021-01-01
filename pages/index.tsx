import React, { FunctionComponent } from 'react';

import { CookiesProvider } from 'react-cookie';
import { Wrapper as SubjectContextWrapper } from '../components/SubjectContext';
import { Wrapper as SettingsContextWrapper } from '../components/SettingsContext';
import {
  Settings as SettingsType,
  getInitialSettings,
} from '../hooks/useSettings';

import SubjectBuilder from '../components/SubjectBuilder';
import Leagues from '../components/Leagues';
import Footer from '../components/Footer';
import Settings from '../components/Settings';

const IndexPage: FunctionComponent<{ settings: SettingsType }> = (props) => {
  return (
    <CookiesProvider>
      <SettingsContextWrapper initialValue={props.settings}>
        <SubjectContextWrapper>
          <div className='container mx-auto'>
            <SubjectBuilder />

            <Leagues />

            <Footer />

            <Settings />
          </div>
        </SubjectContextWrapper>
      </SettingsContextWrapper>
    </CookiesProvider>
  );
};

export default IndexPage;

export async function getServerSideProps({
  req,
}): Promise<{ props: { settings: SettingsType } }> {
  const settings = getInitialSettings(req.cookies.settings);

  return { props: { settings } };
}
