import React, { FunctionComponent } from 'react';

import { LEAGUES } from '../data/reference';

import {
  getInitialSubject,
  Subject as SubjectType,
  Provider as SubjectContextProvider,
} from '../hooks/useSubject';
import { useSettings } from '../hooks/useSettings';

import SubjectLeague from '../components/SubjectLeague';
import SubjectBuilder from '../components/SubjectBuilder';

import { NextPageContext } from 'next';

const IndexPage: FunctionComponent<{
  subject: SubjectType;
}> = (props) => {
  const { settings } = useSettings();

  return (
    <SubjectContextProvider initialValue={props.subject}>
      <div className='container mx-auto px-0 sm:px-4'>
        <SubjectBuilder />

        <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 items-start'>
          {LEAGUES.filter(
            (league) => settings.leagues[league.key] === true,
          ).map((league) => (
            <SubjectLeague key={league.key} league={league} />
          ))}
        </div>
      </div>
    </SubjectContextProvider>
  );
};

export default IndexPage;

export async function getServerSideProps(
  ctx: NextPageContext,
): Promise<{ props: { subject: SubjectType } }> {
  const subject = getInitialSubject(ctx);

  return { props: { subject } };
}
