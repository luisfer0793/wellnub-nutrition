import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { useAuthentication } from 'hooks/useAuthentication.hook';

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuthentication();

  const location = useLocation();

  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate replace to="/login" state={{ from: location }} />
  );
};
