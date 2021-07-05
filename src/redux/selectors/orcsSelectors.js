import { createSelector } from '@reduxjs/toolkit';

export const getOrcById = (orcs, orcId) => createSelector(
  () => orcs.find((orc) => orcId === `${orc.id}`)
);

export const getOrcsByName = (orcs, orcsFriends) => createSelector(
  () => orcsFriends.map((orc) => orcs.find(({ name }) => name === orc))
);
