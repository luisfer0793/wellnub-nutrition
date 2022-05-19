export const authenticationTokensSelector = state =>
  state.authentication.tokens;

export const authenticationIsAuthenticatedSelector = state =>
  state.authentication.isAuthenticated;

export const authenticationUserSelector = state => state.authentication.user;
