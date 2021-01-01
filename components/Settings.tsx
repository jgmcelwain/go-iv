import React, { FunctionComponent, useContext } from 'react';

import { LEAGUES, LEVEL_CAPS, OUTPUT_DATA } from '../data/reference';

import { SettingsActionTypes } from '../hooks/useSettings';

import { Context as SettingsContext } from './SettingsContext';
import { Context as SettingsShownContext } from './SettingsShownContext';

import SettingsWrapper from './SettingsWrapper';
import SettingsEditorCategory from './SettingsEditorCategory';
import SettingsEditorInput from './SettingsEditorInput';

const Settings: FunctionComponent = () => {
  const { isShown, hide } = useContext(SettingsShownContext);
  const { settings, dispatch } = useContext(SettingsContext);

  return (
    <SettingsWrapper onClose={hide} shown={isShown}>
      <div className='bg-white p-4 sm:p-6 pb-0 sm:pb-0'>
        <SettingsEditorCategory title='Calculation'>
          <>
            <p className='text-sm text-gray-500 mb-1'>
              Leagues for which rank data should be calculated for.
            </p>
            {LEAGUES.map((league) => (
              <SettingsEditorInput
                key={league.key}
                onInput={(value) =>
                  dispatch({
                    type: SettingsActionTypes.League,
                    payload: { key: league.key, value },
                  })
                }
                value={settings.leagues[league.key]}
                label={league.name}
              />
            ))}

            <p className='text-sm text-gray-500 mt-4 mb-1'>
              Level caps for which rank data should be calculated for.
            </p>
            {LEVEL_CAPS.map((levelCap) => (
              <SettingsEditorInput
                key={levelCap.level}
                onInput={(value) =>
                  dispatch({
                    type: SettingsActionTypes.LevelCap,
                    payload: { key: levelCap.level, value },
                  })
                }
                value={settings.levelCaps[levelCap.level]}
                label={levelCap.name}
              />
            ))}
          </>
        </SettingsEditorCategory>

        <SettingsEditorCategory title='Display'>
          <>
            <p className='text-sm text-gray-500 mb-1'>
              Selected fields will be displayed in the calculation output.
            </p>
            {OUTPUT_DATA.map((dataPoint) => (
              <SettingsEditorInput
                key={dataPoint.key}
                onInput={(value) =>
                  dispatch({
                    type: SettingsActionTypes.OutputData,
                    payload: { key: dataPoint.key, value },
                  })
                }
                value={settings.outputData[dataPoint.key]}
                label={dataPoint.name}
              />
            ))}
          </>
        </SettingsEditorCategory>
      </div>
    </SettingsWrapper>
  );
};

export default Settings;
