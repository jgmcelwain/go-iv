import React, { FunctionComponent, useContext, useState } from 'react';

import { LEAGUES, LEVEL_CAPS, OUTPUT_DATA } from '../data/reference';

import { SettingsActionTypes } from '../hooks/useSettings';

import { Context as SettingsContext } from './SettingsContext';
import { Context as SettingsShownContext } from './SettingsShownContext';

import SettingsEditor from './SettingsEditor';
import SettingsEditorCategory from './SettingsEditorCategory';
import SettingsEditorInput from './SettingsEditorInput';

const Settings: FunctionComponent = () => {
  const { isShown, hide } = useContext(SettingsShownContext);
  const { settings, dispatch } = useContext(SettingsContext);

  return (
    <SettingsEditor onClose={hide} shown={isShown}>
      <div className='bg-white p-4 sm:p-6 pb-0 sm:pb-0'>
        <SettingsEditorCategory
          title='Leagues'
          description='Choose leagues that will be displayed in the output.'
        >
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
        </SettingsEditorCategory>

        <SettingsEditorCategory
          title='Level Caps'
          description='Choose level caps that your subject will have their rank calculated for.'
        >
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
        </SettingsEditorCategory>

        <SettingsEditorCategory
          title='Output Data'
          description='Choose leagues that will be displayed in the output.'
        >
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
        </SettingsEditorCategory>
      </div>
    </SettingsEditor>
  );
};

export default Settings;
