import { createSelector } from '@reduxjs/toolkit';

export const nutritionistsSelector = createSelector(
  [state => state.nutritionists.nutritionists],
  value => value,
);

export const nutritionistSelector = (id = '') =>
  createSelector([state => state.nutritionists.nutritionists], nutritionists =>
    nutritionists.find(nutritionist => {
      const name = nutritionist.name.toLowerCase().split(' ').join('-');
      return name === id;
    }),
  );
