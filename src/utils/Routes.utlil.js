import { Routes, Route } from 'react-router-dom';

import { Title } from '@mantine/core';

import MainContent from 'components/hoc/MainContent.component';

import { LandingPage, LoginPage, NutritionistsPage } from 'pages';

import { ProtectedRoute } from './ProtectedRoute.util';

export const AppRoutes = () => {
  return (
    <Routes path="/" element={<MainContent />}>
      <Route path="/" element={<LandingPage />} />
      <Route path="nutriologos" element={<NutritionistsPage />} />
      <Route path="login" element={<LoginPage />} />
      {/* ---- ALL PROTECTED ROUTES MUST BE HERE ---- */}
      <Route element={<ProtectedRoute />}>
        <Route path="admin" element={<Title order={1}>ADMINISTRADOR</Title>} />
      </Route>
    </Routes>
  );
};
