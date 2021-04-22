import React, { FunctionComponent } from 'react';

import { LEAGUES } from '../data/reference';

import { Provider as SubjectContextProvider } from '../hooks/useSubject';
import { useSettings } from '../hooks/useSettings';

import SubjectLeague from '../components/SubjectLeague';
import SubjectBuilder from '../components/SubjectBuilder';

const SubjectPage: FunctionComponent = () => {
  const { settings } = useSettings();

  return (
    <SubjectContextProvider>
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
