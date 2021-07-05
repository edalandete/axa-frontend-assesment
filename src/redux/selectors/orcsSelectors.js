import { createSelector } from '@reduxjs/toolkit';

const getOrc = (orcs, orcId) => createSelector(
  () => orcs.find((orc) => orcId === `${orc.id}`)
);

export default getOrc;
