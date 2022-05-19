import { useMutation } from 'react-query';
import { useNotification, useAuthentication, useWellnubAPI } from 'hooks';
import { ROLES } from 'utils/constants.util';
import { useNavigate } from 'react-router-dom';

const useLogInService = () => {
  const wellnub = useWellnubAPI();
  const handleNotification = useNotification();
  const { handleLogin } = useAuthentication();
  const navigate = useNavigate();

  const request = async payload => {
    const { data } = await wellnub.post('/v1/auth/login?role=client', payload);
    return data;
  };

  return useMutation(request, {
    onSuccess: data => {
      const { token, user } = data;
      navigate('/cliente', { replace: true });
      handleLogin({
        user: {
          id: user.id,
          name: user.name,
          role: ROLES.CLIENT,
          email: user.email,
          lastName: user.lastName,
          image:
            user?.image ??
            'https://images.unsplash.com/photo-1621592484082-2d05b1290d7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
        },
        tokens: {
          access: token.accessToken,
          refresh: token.refreshToken,
        },
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

export default useLogInService;
