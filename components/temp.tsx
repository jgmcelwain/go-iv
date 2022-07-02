<div className='flex justify-start items-start space-x-2 flex-shrink-0 pb-10'>
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
    className='text-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed p-1 rounded-full focus-visible-ring ring-offset-gray-800'
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
    className='text-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed p-1 rounded-full focus-visible-ring ring-offset-gray-800'
  >
    <ChevronDoubleDownIcon className='w-4 h-4' aria-hidden />
  </button>
</div>;
