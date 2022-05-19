import { useSelector, useDispatch, batch } from 'react-redux';

import {
  authenticationIsAuthenticatedSelector,
  authenticationUserSelector,
  authenticationTokensSelector,
} from 'redux/slices/authentication/authentication.selector';
import {
  AUTHENTICATION_INITIAL_STATE,
  setAuthenticationStatus,
  setAuthenticationTokens,
  setAuthenticationUser,
} from 'redux/slices/authentication/authentication.slice';

const useAuthentication = () => {
  const user = useSelector(authenticationUserSelector);
  const tokens = useSelector(authenticationTokensSelector);
  const isAuthenticated = useSelector(authenticationIsAuthenticatedSelector);

  const dispatch = useDispatch();

  const handleLogin = payload => {
    batch(() => {
      dispatch(setAuthenticationStatus(true));
      dispatch(setAuthenticationUser(payload.user));
      dispatch(setAuthenticationTokens(payload.tokens));
    });
  };

  const handleLogout = () => {
    batch(() => {
      dispatch(
        setAuthenticationStatus(AUTHENTICATION_INITIAL_STATE.isAuthenticated),
      );
      dispatch(setAuthenticationUser(AUTHENTICATION_INITIAL_STATE.user));
      dispatch(setAuthenticationTokens(AUTHENTICATION_INITIAL_STATE.tokens));
    });
  };

  const handleAuthenticationTokens = tokens => {
    dispatch(setAuthenticationTokens(tokens));
  };

  return {
    user,
    tokens,
    isAuthenticated,
    handleLogin,
    handleLogout,
    handleAuthenticationTokens,
  };
};

export default useAuthentication;
