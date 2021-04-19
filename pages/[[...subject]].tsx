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

const SubjectPage: FunctionComponent<{
  subject: SubjectType;
}> = (props) => {
  const { settings } = useSettings();

  return (
    <SubjectContextProvider initialValue={props.subject}>
      <div className='w-full'>
        <SubjectBuilder />

        <div className='grid items-start w-full grid-cols-1 gap-8 mb-8 xl:grid-cols-2'>
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

export default SubjectPage;

export async function getServerSideProps(
  ctx: NextPageContext,
): Promise<{ props: { subject: SubjectType } }> {
  const subject = getInitialSubject(ctx);

  return { props: { subject } };
}
