import { createSelector } from '@reduxjs/toolkit';

export const isAuthenticatedSelector = createSelector(
  [state => state.authentication.isAuthenticated],
  isAuthenticated => isAuthenticated,
);

export const tokenSelector = createSelector(
  [state => state.authentication.token],
  token => token,
);
