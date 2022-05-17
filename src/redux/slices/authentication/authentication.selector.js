import { createSelector } from '@reduxjs/toolkit';

export const isAuthenticatedSelector = createSelector(
  [state => state.authentication.isAuthenticated],
  isAuthenticated => isAuthenticated,
);

export const userCredentialsSelector = createSelector(
  [state => state.authentication.user],
  user => user,
);
