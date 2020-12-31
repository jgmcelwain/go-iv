import React, { FunctionComponent } from 'react';

import { LEAGUES } from '../data/reference';

import { Wrapper as SubjectContextWrapper } from './SubjectContext';
import League from './League';
import SubjectBuilder from './SubjectBuilder';

const Main: FunctionComponent = () => {
  return (
    <SubjectContextWrapper>
      <div className='container mx-auto px-4'>
        <SubjectBuilder />

        <div className='w-full grid grid-cols-1 xl:grid-cols-2 gap-6'>
          {LEAGUES.map((league) => (
            <League key={league.key} league={league} />
          ))}
        </div>
      </div>
    </SubjectContextWrapper>
  );
};

export default Main;
