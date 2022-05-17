import { Routes, Route } from 'react-router-dom';

import {
  LandingPage,
  LoginPage,
  NutritionistsPage,
  NutritionistProfilePage,
  PartnersPage,
  UnauthorizedPage,
} from 'pages';

import { ROLES } from 'utils/constants.util';

import { ProtectedRoute } from './Protected.route';

import ClientRoutes from './Client.routes';
import PartnerRoutes from './Partner.routes';
import NutritionistRoutes from './Nutritionist.routes';
import AdministratorRoutes from './Administrator.routes';

const RootRoutes = () => {
  return (
    <Routes path="/">
      {/* ---- PUBLIC ROUTES ---- */}
      <Route index element={<LandingPage />} />
      <Route path="nutriologos" element={<NutritionistsPage />} />
      <Route path="nutriologos/:id" element={<NutritionistProfilePage />} />
      <Route path="partners" element={<PartnersPage />} />
      <Route path="login" element={<LoginPage />} />
      {/* ---- END OF PUBLIC ROUTES ---- */}

      {/* ---- PROTECTED ROUTES ---- */}
      <Route element={<ProtectedRoute allowedRole={ROLES.PARTNER} />}>
        <Route path="partner/*" element={<PartnerRoutes />} />
      </Route>
      <Route element={<ProtectedRoute allowedRole={ROLES.NUTRITIONIST} />}>
        <Route path="nutriologo/*" element={<NutritionistRoutes />} />
      </Route>
      <Route element={<ProtectedRoute allowedRole={ROLES.ADMIN} />}>
        <Route path="administrador/*" element={<AdministratorRoutes />} />
      </Route>
      <Route element={<ProtectedRoute allowedRole={ROLES.CLIENT} />}>
        <Route path="cliente/*" element={<ClientRoutes />} />
      </Route>
      {/* ---- END OF PROTECTED ROUTES ---- */}

      <Route path="unauthorized" element={<UnauthorizedPage />} />
    </Routes>
  );
};

export default RootRoutes;
