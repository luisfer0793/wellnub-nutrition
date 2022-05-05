import { useSelector, useDispatch } from 'react-redux';

import { isAuthenticatedSelector } from 'redux/slices/authentication/authentication.selector';
import { setAuthentication as setAuth } from 'redux/slices/authentication/authentication.slice';

export const useAuthentication = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);

  const dispatch = useDispatch();

  const setAuthentication = authenticationState => {
    dispatch(setAuth(authenticationState));
  };

  return {
    isAuthenticated,
    setAuthentication,
  };
};
