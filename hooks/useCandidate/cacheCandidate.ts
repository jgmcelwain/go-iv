import { NextRouter } from 'next/router';
import { Candidate } from '.';
import { setCookie } from 'nookies';

import * as gtag from '../../utils/gtag';

export function cacheCandidate(router: NextRouter, candidate: Candidate) {
  router.replace(
    `/${candidate.species.id}/${candidate.ivs.atk}/${candidate.ivs.def}/${candidate.ivs.sta}/${candidate.floor}`,
    undefined,
    { shallow: true },
  );

  gtag.event('candidate_created', {
    species_id: candidate.species.id,
    iv_atk: candidate.ivs.atk,
    iv_def: candidate.ivs.def,
    iv_sta: candidate.ivs.sta,
    floor: candidate.floor,
  });

  setCookie({}, 'candidate', JSON.stringify(candidate), {
    path: '/',
    maxAge: 30 * 24 * 60 * 60,
  });
}
