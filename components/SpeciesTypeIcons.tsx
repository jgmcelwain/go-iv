import { FC } from 'react';
import { Pokemon } from '../data/pokedex';
import Image from 'next/image';

const SpeciesTypeIcons: FC<{ types: Pokemon['types'] }> = ({ types }) => {
  return (
    <div className='flex -space-x-1 relative z-0' aria-hidden>
      {types.map((type, typeIndex) => (
        <div
          key={type}
          title={type.charAt(0).toUpperCase() + type.slice(1)}
          className={`h-5 w-5 rounded-full overflow-hidden flex justify-center items-center border-[1.5px] border-white dark:border-gray-800 ${
            typeIndex === 0 ? 'z-10' : 'z-0'
          } ${(() => {
            switch (type) {
              case 'bug': {
                return 'bg-lime-500';
              }
              case 'dark': {
                return 'bg-zinc-600';
              }
              case 'dragon': {
                return 'bg-sky-600';
              }
              case 'electric': {
                return 'bg-yellow-400';
              }
              case 'fire': {
                return 'bg-orange-400';
              }
              case 'fairy': {
                return 'bg-fuchsia-400';
              }
              case 'fighting': {
                return 'bg-rose-500';
              }
              case 'flying': {
                return 'bg-indigo-400';
              }
              case 'ghost': {
                return 'bg-indigo-500';
              }
              case 'grass': {
                return 'bg-green-500';
              }
              case 'ground': {
                return 'bg-orange-400';
              }
              case 'ice': {
                return 'bg-emerald-400';
              }
              case 'normal': {
                return 'bg-neutral-400';
              }
              case 'poison': {
                return 'bg-purple-500';
              }
              case 'psychic': {
                return 'bg-rose-400';
              }
              case 'rock': {
                return 'bg-stone-400';
              }
              case 'steel': {
                return 'bg-cyan-600';
              }
              case 'water': {
                return 'bg-blue-400';
              }
            }
          })()}`}
        >
          <Image src={`/types/${type}.svg`} alt={type} width={10} height={10} />
        </div>
      ))}
    </div>
  );
};

export default SpeciesTypeIcons;
