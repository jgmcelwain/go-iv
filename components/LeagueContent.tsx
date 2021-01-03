import React, { FunctionComponent, useContext, useEffect, useRef } from 'react';

import { Context as LeagueContext } from './LeagueContext';
import { Wrapper as LeagueSubjectSpreadsContextWrapper } from './LeagueSubjectSpreadsContext';

import LeagueSubject from './LeagueSubject';
import LeagueTopSpreadsForLevel from './LeagueTopSpreadsForLevel';

const LeagueContent: FunctionComponent = () => {
  const { displayMode } = useContext(LeagueContext);
  const ref = useRef<HTMLDivElement>();

  useEffect(() => {
    ref.current.scrollTo({ left: 0, behavior: 'smooth' });
  }, [displayMode]);

  return (
    <LeagueSubjectSpreadsContextWrapper>
      <div className='w-full overflow-x-scroll bg-gray-100' ref={ref}>
        {displayMode === 'subject' ? (
          <LeagueSubject />
        ) : (
          <LeagueTopSpreadsForLevel />
        )}
      </div>
    </LeagueSubjectSpreadsContextWrapper>
  );
};

export default LeagueContent;
