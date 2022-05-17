import { useMutation } from 'react-query';
import { useAxiosInterceptors } from 'hooks/useAxiosInterceptors.hook';
import { useAuthentication } from 'hooks/useAuthentication.hook';
import { useNotification } from 'hooks/useNotification.hook';

import { ROLES } from 'utils/constants.util';

export const useLogInService = () => {
  const { handleLogin } = useAuthentication();
  const handleNotification = useNotification();
  const wellnub = useAxiosInterceptors();

  const request = async payload => {
    const { data } = await wellnub.post('/v1/auth/login?role=client', payload);
    return data;
  };

  return useMutation(request, {
    onSuccess: data => {
      const { token, user } = data;
      handleLogin({
        id: user.id,
        name: user.name,
        role: ROLES.CLIENT,
        email: user.email,
        lastName: user.lastName,
        accessToken: token.accessToken,
        refreshToken: token.refreshToken,
        image:
          user?.image ??
          'https://images.unsplash.com/photo-1621592484082-2d05b1290d7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
      });
    },
    onError: ({ response }) => {
      const isPublic = response?.data?.isPublic;
      handleNotification({
        title: isPublic ? 'Inicio de sesión incorrecto' : 'Error',
        message: isPublic
          ? 'Usuario y/o contraseña incorrectos'
          : 'Algo salió mal, intenta más tarde',
        variant: isPublic ? 'warning' : 'error',
      });
    },
  });
};
