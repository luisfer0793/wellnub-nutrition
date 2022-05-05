import { createSelector } from '@reduxjs/toolkit';

export const nutritionistsSelector = createSelector(
  [state => state.nutritionists.nutritionists],
  value => value,
);
