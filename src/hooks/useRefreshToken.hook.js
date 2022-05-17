import { wellnub } from 'network/wellnub.api';
import { useAuthentication } from './useAuthentication.hook';

export const useRefreshToken = () => {
  const { user, handleLogin } = useAuthentication();

  const refreshToken = async () => {
    const response = await wellnub.post('/v1/auth/refresh-token', {
      email: user.email,
      refreshToken: user.refreshToken,
    });
    console.log('Response [refreshToken]: ', response);
    return response.data.accessToken;
  };

  return {
    refreshToken,
  };
};
