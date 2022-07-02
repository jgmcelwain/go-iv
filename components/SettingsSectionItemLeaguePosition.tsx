import {
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from '@heroicons/react/solid';
import { FC } from 'react';
import { League } from '../data/league';
import { SettingsActionTypes, useSettings } from '../hooks/useSettings';

const SettingsSectionItemLeaguePosition: FC<{ league: League }> = ({
  league,
}) => {
  const { settings, dispatch } = useSettings();

  return (
    <div className='flex justify-start items-center flex-shrink-0'>
      <button
        onClick={() => {
          const currentIndex = settings.leagueOrder.indexOf(league.key);
          const newIndex = currentIndex - 1;
          const newOrder = [...settings.leagueOrder];

          [newOrder[currentIndex], newOrder[newIndex]] = [
            newOrder[newIndex],
            newOrder[currentIndex],
          ];

          dispatch({
            type: SettingsActionTypes.LeagueOrder,
            payload: newOrder,
          });
        }}
        disabled={settings.leagueOrder.indexOf(league.key) === 0}
        aria-label={`Move ${league.name} up`}
        className='text-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed p-0.5 rounded-full focus-visible-ring ring-offset-gray-800'
      >
        <ChevronDoubleUpIcon className='w-4 h-4' aria-hidden />
      </button>

      <button
        onClick={() => {
          const currentIndex = settings.leagueOrder.indexOf(league.key);
          const newIndex = currentIndex + 1;
          const newOrder = [...settings.leagueOrder];

          [newOrder[currentIndex], newOrder[newIndex]] = [
            newOrder[newIndex],
            newOrder[currentIndex],
          ];

          dispatch({
            type: SettingsActionTypes.LeagueOrder,
            payload: newOrder,
          });
        }}
        disabled={
          settings.leagueOrder.indexOf(league.key) ===
          settings.leagueOrder.length - 1
        }
        aria-label={`Move ${league.name} down`}
        className='text-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed p-1 rounded-full focus-visible-ring ring-offset-gray-800'
      >
        <ChevronDoubleDownIcon className='w-4 h-4' aria-hidden />
      </button>
    </div>
  );
};

export default SettingsSectionItemLeaguePosition;
