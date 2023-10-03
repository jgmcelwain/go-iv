import { IVGuess } from '../features/iv-guess';

export default function IVGuessPage() {
  return (
    <>
      <h1 className='px-4 sm:px-0 w-full text-2xl pt-2 font-semibold'>
        IV Guess{' '}
        <span className='text-xs dark:text-gray-500 text-gray-400'>Beta</span>
      </h1>

      <p className='w-full px-4 sm:px-0 mb-2 text-sm text-gray-700 dark:text-gray-300'>
        This tool is a work-in-progress and should be used for educational
        purposes only. Please don't try to use this in an official tournament!
      </p>

      <IVGuess />
    </>
  );
}
