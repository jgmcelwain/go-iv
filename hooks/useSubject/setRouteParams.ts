import { NextRouter } from 'next/router';
import { Subject } from '.';

import * as gtag from '../../utils/gtag';

export function setRouteParams(router: NextRouter, subject: Subject) {
  router.replace(
    `/${subject.species.id}/${subject.ivs.atk}/${subject.ivs.def}/${subject.ivs.sta}/${subject.floor}`,
    undefined,
    { shallow: true },
  );

  gtag.event('subject_created', {
    species_id: subject.species.id,
    iv_atk: subject.ivs.atk,
    iv_def: subject.ivs.def,
    iv_sta: subject.ivs.sta,
    floor: subject.floor,
  });
}
