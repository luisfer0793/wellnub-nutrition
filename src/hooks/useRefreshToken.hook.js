import { wellnub } from 'network/wellnub.api';
import useAuthentication from './useAuthentication.hook';

const useRefreshToken = () => {
  const { user, handleAuthenticationTokens, handleLogout, tokens } =
    useAuthentication();

  const refreshToken = async () => {
    try {
      const response = await wellnub.post('/v1/auth/refresh-token', {
        email: user.email,
        refreshToken: tokens.refresh,
      });
      handleAuthenticationTokens({
        access: response.data.accessToken,
        refresh: response.data.refreshToken,
      });
      return response.data.accessToken;
    } catch (error) {
      // TODO: Lanzar error para que sea capturado en el interceptor
      handleLogout();
    }
  };

  return {
    refreshToken,
  };
};

export default useRefreshToken;
