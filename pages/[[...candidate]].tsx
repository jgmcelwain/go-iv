import React, { FC } from 'react';

import { LEAGUES } from '../data/league';
import { NextPageContext } from 'next';

import { parseCookies } from 'nookies';

import {
  Candidate,
  Provider as CandidateContextProvider,
} from '../hooks/useCandidate';
import { useSettings } from '../hooks/useSettings';

import CandidateLeague from '../components/CandidateLeague';
import CandidateBuilder from '../components/CandidateBuilder';

const CandidatePage: FC<{ cachedCandidate: Candidate | null }> = ({
  cachedCandidate,
}) => {
  const { settings } = useSettings();

  return (
    <CandidateContextProvider cachedCandidate={cachedCandidate}>
      <CandidateBuilder />

      <section className='grid items-start w-full grid-cols-1 gap-4 mb-4 sm:mb-8 sm:gap-8 lg:grid-cols-2'>
        {LEAGUES.filter((league) => settings.leagues[league.key] === true)
          .sort(
            (a, b) =>
              settings.leagueOrder.indexOf(a.key) -
              settings.leagueOrder.indexOf(b.key),
          )
          .map((league) => (
            <CandidateLeague key={league.key} league={league} />
          ))}
      </section>
    </CandidateContextProvider>
  );
};

export default CandidatePage;

export const getServerSideProps = async (
  ctx: NextPageContext,
  // eslint-disable-next-line @typescript-eslint/require-await
): Promise<{ props: { cachedCandidate: Candidate | null } }> => {
  try {
    const cookies = parseCookies(ctx);
    const cachedCandidate = JSON.parse(cookies.candidate) as Candidate;

    return { props: { cachedCandidate } };
  } catch (err) {
    return { props: { cachedCandidate: null } };
  }
};
