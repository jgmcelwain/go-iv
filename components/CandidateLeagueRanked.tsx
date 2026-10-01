import React, { FC } from 'react';

import { LEVEL_CAPS, isLevelCapEnabled } from '../data/levelCap';

import { useLeague } from '../hooks/useLeague';
import { useSettings } from '../hooks/useSettings';
import { useCandidate } from '../hooks/useCandidate';

import * as CandidateLeagueTableCells from './CandidateLeagueTableCells';
import CandidateLeagueRankedAtLevelCap from './CandidateLeagueRankedAtLevelCap';
import { usePokedex } from '../hooks/usePokedex';

const CandidateLeagueRanked: FC = () => {
  const { league } = useLeague();
  const { candidate } = useCandidate();
  const { settings } = useSettings();
  const pokedex = usePokedex();
  const forms = candidate.species.forms.filter((form) => pokedex.byId(form.id));
  const hasForms = candidate.species.forms.length > 1;

  return (
    <section className='w-full overflow-x-scroll'>
      <table className='w-full border-collapse table-fixed'>
        <thead>
          <tr>
            {hasForms && (
              <CandidateLeagueTableCells.Header widthClass='w-44'>
                Form
              </CandidateLeagueTableCells.Header>
            )}
            {settings.outputData.rank && (
              <CandidateLeagueTableCells.Header widthClass='w-16'>
                Rank
              </CandidateLeagueTableCells.Header>
            )}

            {settings.outputData.cp && (
              <CandidateLeagueTableCells.Header widthClass='w-16'>
                CP
              </CandidateLeagueTableCells.Header>
            )}

            {settings.outputData.level && (
              <CandidateLeagueTableCells.Header>
                Level
              </CandidateLeagueTableCells.Header>
            )}

            {settings.outputData.xlCandy && (
              <CandidateLeagueTableCells.Header widthClass='w-16'>
                XL
              </CandidateLeagueTableCells.Header>
            )}

            {settings.outputData.statProduct && (
              <CandidateLeagueTableCells.Header widthClass='w-28'>
                Stat Prod
              </CandidateLeagueTableCells.Header>
            )}

            {settings.outputData.stats && (
              <>
                <CandidateLeagueTableCells.Header>
                  Atk
                </CandidateLeagueTableCells.Header>
                <CandidateLeagueTableCells.Header>
                  Def
                </CandidateLeagueTableCells.Header>
                <CandidateLeagueTableCells.Header>
                  Sta
                </CandidateLeagueTableCells.Header>
              </>
            )}

            {settings.outputData.bulkProduct && (
              <CandidateLeagueTableCells.Header widthClass='w-28'>
                Bulk Prod
              </CandidateLeagueTableCells.Header>
            )}

            <CandidateLeagueTableCells.Header />
          </tr>
        </thead>

        {LEVEL_CAPS.map((levelCap) => {
          const enabledForms = forms.filter((species) =>
            isLevelCapEnabled(levelCap.level, settings.levelCaps, {
              showMegaLevelCaps: settings.showMegaLevelCaps,
              isMasterLeague: league.cp === 10000,
              isMegaSpecies: species.name.startsWith('Mega '),
            }),
          );
          if (enabledForms.length === 0) return null;
          return (
            <tbody
              key={levelCap.level}
              className={
                hasForms
                  ? '[&>tr>td]:py-1.5 [&>tr+tr>td]:border-t-0'
                  : undefined
              }
            >
              {enabledForms.map((species) => (
                <CandidateLeagueRankedAtLevelCap
                  key={species.id}
                  levelCap={levelCap}
                  species={species}
                />
              ))}
            </tbody>
          );
        })}
      </table>
    </section>
  );
};

export default CandidateLeagueRanked;
