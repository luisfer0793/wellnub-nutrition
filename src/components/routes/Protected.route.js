import { useLocation, Outlet, Navigate } from 'react-router-dom';
import { useAuthentication } from 'hooks';

export const ProtectedRoute = ({ allowedRole = [] }) => {
  const { isAuthenticated, user } = useAuthentication();

  const isAccessGranted = user.role === allowedRole;

  const location = useLocation();

  return isAccessGranted ? (
    <Outlet />
  ) : isAuthenticated ? (
    <Navigate replace to="/unauthorized" state={{ from: location }} />
  ) : (
    <Navigate replace to="/login" state={{ from: location }} />
  );
};
