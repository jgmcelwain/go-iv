import React, { FunctionComponent, useContext } from 'react';

import { Context as LeagueContext } from './LeagueContext';
import { Wrapper as LeagueSubjectSpreadsContextWrapper } from './LeagueSubjectSpreadsContext';

import LeagueSubject from './LeagueSubject';
import LeagueTopSpreadsForLevel from './LeagueTopSpreadsForLevel';

const LeagueContent: FunctionComponent = () => {
  const { displayMode } = useContext(LeagueContext);

  return (
    <LeagueSubjectSpreadsContextWrapper>
      {displayMode === 'subject' ? (
        <LeagueSubject />
      ) : (
        <LeagueTopSpreadsForLevel />
      )}
    </LeagueSubjectSpreadsContextWrapper>
  );
};

export default LeagueContent;
