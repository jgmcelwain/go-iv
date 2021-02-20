import React, { FunctionComponent } from 'react';

import { LEAGUES, LEVEL_CAPS, OUTPUT_DATA } from '../data/reference';

import { useSettings, SettingsActionTypes } from '../hooks/useSettings';
import { useSettingsNavigation } from '../hooks/useSettingsNavigation';

import SettingsContentTabSection from './SettingsContentTabSection';
import SettingsContentTabSectionInput from './SettingsContentTabSectionInput';

const SettingsContent: FunctionComponent = () => {
  const { settings, dispatch } = useSettings();
  const { activeTab } = useSettingsNavigation();

  return (
    <div className='w-full h-96 p-4'>
      {activeTab === 'calculation' ? (
        <>
          <SettingsContentTabSection description='Choose which leagues rank data should be calculated for:'>
            {LEAGUES.map((league) => (
              <SettingsContentTabSectionInput
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
          </SettingsContentTabSection>

          <SettingsContentTabSection description='Choose which level caps rank data should be calculated for:'>
            {LEVEL_CAPS.map((levelCap) => (
              <SettingsContentTabSectionInput
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
          </SettingsContentTabSection>
        </>
      ) : activeTab === 'display' ? (
        <SettingsContentTabSection description='Select which fields should be displayed in the subject calculation output:'>
          {OUTPUT_DATA.map((dataPoint) => (
            <SettingsContentTabSectionInput
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
        </SettingsContentTabSection>
      ) : activeTab === 'advanced' ? (
        <SettingsContentTabSection description='Toggle available data sources:'>
          <SettingsContentTabSectionInput
            onInput={(value) =>
              dispatch({
                type: SettingsActionTypes.Speculative,
                payload: value,
              })
            }
            value={settings.showSpeculative}
            label='Speculative Pokemon (unreleased Mega Evolutions)'
          />
        </SettingsContentTabSection>
      ) : (
        ''
      )}
    </div>
  );
};

export default SettingsContent;
