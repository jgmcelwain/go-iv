import React, { FunctionComponent, useContext } from 'react';
import { Context as LeagueContext } from './LeagueContext';

import LeagueSubject from './LeagueSubject';
import LeagueTopSpreadsForLevel from './LeagueTopSpreadsForLevel';

const LeagueContent: FunctionComponent = () => {
  const { displayMode } = useContext(LeagueContext);

  return (
    <>
      {displayMode === 'subject' ? (
        <LeagueSubject />
      ) : (
        <LeagueTopSpreadsForLevel />
      )}
    </>
  );
};

export default LeagueContent;
