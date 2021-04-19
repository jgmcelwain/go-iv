import React, { FunctionComponent } from 'react';

import { LEAGUES, LEVEL_CAPS, OUTPUT_DATA } from '../data/reference';

import { useSettings, SettingsActionTypes } from '../hooks/useSettings';

import SettingsSection from '../components/SettingsSection';
import SettingsInput from '../components/SettingsInput';

const SettingsPage: FunctionComponent = () => {
  const { settings, dispatch } = useSettings();

  return (
    <div className='grid items-start w-full grid-cols-1 gap-12 -mt-2 md:gap-8 lg:grid-cols-2 md:mt-4'>
      <SettingsSection id='leagues' title='Leagues'>
        {LEAGUES.map((league) => (
          <SettingsInput
            key={league.key}
            onInput={(value) =>
              dispatch({
                type: SettingsActionTypes.League,
                payload: { key: league.key, value },
              })
            }
            value={settings.leagues[league.key]}
            label={league.name}
            description={`Max CP: ${league.cp}`}
          />
        ))}
      </SettingsSection>

      <SettingsSection id='level-caps' title='Level Caps'>
        {LEVEL_CAPS.map((levelCap) => (
          <SettingsInput
            key={levelCap.level}
            onInput={(value) =>
              dispatch({
                type: SettingsActionTypes.LevelCap,
                payload: { key: levelCap.level, value },
              })
            }
            value={settings.levelCaps[levelCap.level]}
            label={levelCap.name}
            description={levelCap.description}
          />
        ))}
      </SettingsSection>

      <SettingsSection id='displayed-fields' title='Output Fields'>
        {OUTPUT_DATA.map((dataPoint) => (
          <SettingsInput
            key={dataPoint.key}
            onInput={(value) =>
              dispatch({
                type: SettingsActionTypes.OutputData,
                payload: { key: dataPoint.key, value },
              })
            }
            value={settings.outputData[dataPoint.key]}
            label={dataPoint.name}
            description={dataPoint.description}
          />
        ))}
      </SettingsSection>

      <SettingsSection id='data-sources' title='Data Sources'>
        <SettingsInput
          onInput={(value) =>
            dispatch({
              type: SettingsActionTypes.Speculative,
              payload: value,
            })
          }
          value={settings.showSpeculative}
          label='Speculative Pokemon'
          description='Unreleased Generations, Forms and Mega Evolutions'
        />
      </SettingsSection>
    </div>
  );
};

export default SettingsPage;
