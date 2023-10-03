import { AtkGuess } from '../features/atk-guess';

export default function AtkGuessPage() {
  return (
    <>
      <h1 className='w-full text-2xl pt-2 font-semibold'>ATK Guess</h1>

      <p className='mb-2 text-sm text-gray-700 dark:text-gray-300'>
        This tool is a work-in-progress. Obviously you can't use it in a
        tournament.
      </p>

      <AtkGuess />
    </>
  );
}
