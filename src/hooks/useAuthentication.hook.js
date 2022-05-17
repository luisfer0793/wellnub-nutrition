import { useSelector, useDispatch } from 'react-redux';

import {
  isAuthenticatedSelector,
  userCredentialsSelector,
} from 'redux/slices/authentication/authentication.selector';
import { setAuthentication } from 'redux/slices/authentication/authentication.slice';

export const useAuthentication = () => {
  const isAuthenticated = useSelector(isAuthenticatedSelector);
  const user = useSelector(userCredentialsSelector);

  const dispatch = useDispatch();

  const handleLogin = user => {
    dispatch(setAuthentication(true, user));
  };

  const handleLogout = () => {
    dispatch(setAuthentication(false));
  };

  return {
    user,
    isAuthenticated,
    handleLogin,
    handleLogout,
    setAuthentication,
  };
};
