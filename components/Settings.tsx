import React, { FunctionComponent, useContext } from 'react';

import { LEAGUES, LEVEL_CAPS, OUTPUT_DATA } from '../data/reference';

import { useSettings, SettingsActionTypes } from '../hooks/useSettings';
import { Context as SettingsShownContext } from './SettingsShownContext';

import SettingsWrapper from './SettingsWrapper';
import SettingsSection from './SettingsSection';
import SettingsSectionCategory from './SettingsSectionCategory';
import SettingsSectionCategoryInput from './SettingsSectionCategoryInput';

const Settings: FunctionComponent = () => {
  const { isShown, hide } = useContext(SettingsShownContext);
  const { settings, dispatch } = useSettings();

  return (
    <SettingsWrapper onClose={hide} shown={isShown}>
      <SettingsSection title='Calculation'>
        <SettingsSectionCategory description='Leagues for which rank data should be calculated for.'>
          {LEAGUES.map((league) => (
            <SettingsSectionCategoryInput
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
        </SettingsSectionCategory>

        <SettingsSectionCategory description='Level caps for which rank data should be calculated for.'>
          {LEVEL_CAPS.map((levelCap) => (
            <SettingsSectionCategoryInput
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
        </SettingsSectionCategory>
      </SettingsSection>

      <SettingsSection title='Display'>
        <SettingsSectionCategory description='Selected fields will be displayed in the calculation output.'>
          {OUTPUT_DATA.map((dataPoint) => (
            <SettingsSectionCategoryInput
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
        </SettingsSectionCategory>
      </SettingsSection>
    </SettingsWrapper>
  );
};

export default Settings;
