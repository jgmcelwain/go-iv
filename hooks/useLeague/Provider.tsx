import React, { FC, ReactNode, useState } from 'react';

import { League } from '../../data/league';
import { LevelCap } from '../../data/levelCap';
import { Pokemon } from '../../data/pokedex';
import { useCandidate } from '../useCandidate';

import { Context } from '.';

function useInspectedLevelCapState() {
  const { candidate } = useCandidate();
  const [selection, setSelection] = useState<{
    candidateId: string;
    levelCap: LevelCap;
    species: Pokemon;
  } | null>(null);
  const active =
    selection?.candidateId === candidate.species.id ? selection : null;

  function setInspectedLevelCap(
    levelCap: LevelCap | null,
    species = candidate.species.defaultForm,
  ) {
    setSelection(
      levelCap
        ? { candidateId: candidate.species.id, levelCap, species }
        : null,
    );
  }

  return {
    inspectedLevelCap: active?.levelCap ?? null,
    inspectedSpecies: active?.species ?? null,
    setInspectedLevelCap,
  };
}

export function useCollapsedState() {
  const [collapsed, setCollapsed] = useState(false);

  const collapse = () => setCollapsed(true);
  const expand = () => setCollapsed(false);
  const toggle = () => setCollapsed((val) => !val);

  return {
    value: collapsed,
    collapse,
    expand,
    toggle,
  };
}

export const Provider: FC<{
  league: League;
  children: ReactNode;
}> = ({ league, children }) => {
  const inspection = useInspectedLevelCapState();
  const collapsedState = useCollapsedState();

  return (
    <Context.Provider
      value={{
        league,
        ...inspection,
        collapsed: collapsedState,
      }}
    >
      {children}
    </Context.Provider>
  );
};
