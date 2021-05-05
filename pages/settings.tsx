import React, { FunctionComponent } from 'react';

import { LEAGUES } from '../data/league';
import { LEVEL_CAPS } from '../data/levelCap';
import { OUTPUT_DATA } from '../data/outputData';

import { useSettings, SettingsActionTypes } from '../hooks/useSettings';

import Head from 'next/head';
import SettingsSection from '../components/SettingsSection';
import SettingsInput from '../components/SettingsInput';

const SettingsPage: FunctionComponent = () => {
  const { settings, dispatch } = useSettings();

  return (
    <div className='grid items-start w-full grid-cols-1 gap-12 -mt-2 md:gap-8 lg:grid-cols-2 md:mt-4'>
      <Head>
        <title>Settings • PVPIV.app</title>
      </Head>

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

      <SettingsSection id='data-sources' title='Candidate Creation'>
        <SettingsInput
          onInput={(value) =>
            dispatch({
              type: SettingsActionTypes.Speculative,
              payload: value,
            })
          }
          value={settings.showSpeculative}
          label='Show Speculative Pokemon'
          description='Unreleased Generations, Forms and Mega Evolutions'
        />

        <SettingsInput
          onInput={(value) =>
            dispatch({
              type: SettingsActionTypes.ShadowToggle,
              payload: value,
            })
          }
          value={settings.showShadowToggle}
          label='Shadow Toggle'
          description='Add a switch to toggle whether your candidate is a Shadow Pokémon. Note: Shadow bonus does NOT affect CMP ties.'
        />
      </SettingsSection>
    </div>
  );
};

export default SettingsPage;
