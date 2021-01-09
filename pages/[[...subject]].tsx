import React, { FunctionComponent } from 'react';

import {
  getInitialSubject,
  Subject as SubjectType,
  Provider as SubjectContextProvider,
} from '../hooks/useSubject';

import SubjectBuilder from '../components/SubjectBuilder';
import LeagueGrid from '../components/LeagueGrid';
import Footer from '../components/Footer';
import Settings from '../components/Settings';
import { NextPageContext } from 'next';

const IndexPage: FunctionComponent<{
  subject: SubjectType;
}> = (props) => {
  return (
    <SubjectContextProvider initialValue={props.subject}>
      <div className='container mx-auto px-0 sm:px-4'>
        <SubjectBuilder />

        <LeagueGrid />

        <Footer />

        <Settings />
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
