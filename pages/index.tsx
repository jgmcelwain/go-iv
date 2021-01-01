import React, { FunctionComponent } from 'react';

import { LEAGUES } from '../data/reference';

import { Wrapper as SubjectContextWrapper } from '../components/SubjectContext';
import SubjectBuilder from '../components/SubjectBuilder';
import League from '../components/League';
import Footer from '../components/Footer';

const IndexPage: FunctionComponent = () => {
  return (
    <div className='container mx-auto'>
      <SubjectContextWrapper>
        <>
          <SubjectBuilder />

          <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8'>
            {LEAGUES.map((league) => (
              <League key={league.key} league={league} />
            ))}
          </div>
        </>
      </SubjectContextWrapper>

      <Footer />
    </div>
  );
};

export default IndexPage;
