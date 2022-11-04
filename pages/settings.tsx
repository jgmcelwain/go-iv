import React, { FC } from 'react';

import { LEAGUES } from '../data/league';
import { LEVEL_CAPS } from '../data/levelCap';
import { OUTPUT_DATA } from '../data/outputData';

import { useSettings, SettingsActionTypes } from '../hooks/useSettings';

import Head from 'next/head';
import SettingsSection from '../components/SettingsSection';
import SettingsSectionItem from '../components/SettingsSectionItem';
import SettingsSectionItemToggle from '../components/SettingsSectionItemToggle';
import SettingsSectionItemLeaguePosition from '../components/SettingsSectionItemLeaguePosition';

const SettingsPage: FC = () => {
  const { settings, dispatch } = useSettings();

  return (
    <div className='grid items-start w-full grid-cols-1 gap-12 -mt-2 md:gap-8 lg:grid-cols-2 md:mt-4'>
      <Head>
        <title>Settings • PVPIV.app</title>
      </Head>

      <SettingsSection id='leagues' title='Leagues'>
        {LEAGUES.sort(
          (a, b) =>
            settings.leagueOrder.indexOf(a.key) -
            settings.leagueOrder.indexOf(b.key),
        ).map((league) => (
          <SettingsSectionItem key={league.key}>
            <SettingsSectionItemLeaguePosition league={league} />

            <SettingsSectionItemToggle
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
          </SettingsSectionItem>
        ))}
      </SettingsSection>

      <SettingsSection id='level-caps' title='Level Caps'>
        {LEVEL_CAPS.map((levelCap) => (
          <SettingsSectionItem key={levelCap.name}>
            <SettingsSectionItemToggle
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
          </SettingsSectionItem>
        ))}
      </SettingsSection>

      <SettingsSection id='displayed-fields' title='Output Fields'>
        {OUTPUT_DATA.map((outputField) => (
          <SettingsSectionItem key={outputField.key}>
            <SettingsSectionItemToggle
              onInput={(value) =>
                dispatch({
                  type: SettingsActionTypes.OutputData,
                  payload: { key: outputField.key, value },
                })
              }
              value={settings.outputData[outputField.key]}
              label={outputField.name}
              description={outputField.description}
            />
          </SettingsSectionItem>
        ))}
      </SettingsSection>

      <SettingsSection id='data-sources' title='Candidate Creation'>
        <SettingsSectionItem>
          <SettingsSectionItemToggle
            onInput={(value) =>
              dispatch({
                type: SettingsActionTypes.Speculative,
                payload: value,
              })
            }
            value={settings.showSpeculative}
            label='Show Speculative Pokémon'
            description='Unreleased Generations, Forms and Mega Evolutions.'
          />
        </SettingsSectionItem>

        <SettingsSectionItem>
          <SettingsSectionItemToggle
            onInput={(value) =>
              dispatch({
                type: SettingsActionTypes.RankingMetric,
                payload: value,
              })
            }
            value={settings.showRankingMetric}
            label='Alternate Ranking Metrics'
            description='Options to sort by Attack, Defense and Stamina as well as the default Stat Product.'
          />
        </SettingsSectionItem>

        <SettingsSectionItem>
          <SettingsSectionItemToggle
            onInput={(value) =>
              dispatch({
                type: SettingsActionTypes.ImpossibleFloors,
                payload: value,
              })
            }
            value={settings.allowImpossibleFloors}
            label='Allow Impossible IV Floors'
            description='Allow any IV floor to be picked when creating a Candidate, regardless of acquisition method limitations.'
          />
        </SettingsSectionItem>

        <SettingsSectionItem>
          <SettingsSectionItemToggle
            onInput={(value) =>
              dispatch({
                type: SettingsActionTypes.MinimumLevel,
                payload: value,
              })
            }
            value={settings.showMinimumLevel}
            label='Minimum Level'
            description='Choose the minimum level to use when creating a Candidate. Useful for checking ranks when species are not available at certain lower levels.'
          />
        </SettingsSectionItem>
      </SettingsSection>
    </div>
  );
};

export default SettingsPage;
