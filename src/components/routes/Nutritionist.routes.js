import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Title } from '@mantine/core';

import ApplicationShell from '../layout/ApplicationShell/ApplicationShell.component';

const NutritionistRoutes = () => {
  useEffect(() => {
    console.log('RENDER - [NutritionistRoutes]');
  });

  return (
    <Routes>
      <Route element={<ApplicationShell />}>
        <Route index element={<Title>Index del nutriólogo</Title>} />
        <Route
          path="dashboard"
          element={<Title>Dashboard del nutriólogo</Title>}
        />
        <Route
          path="tutoriales"
          element={<Title>Tutoriales del nutriólogo</Title>}
        />
        <Route path="*" element={<p>Not found</p>} />
      </Route>
    </Routes>
  );
};

export default NutritionistRoutes;
