import { Routes, Route } from 'react-router-dom';

import { Title } from '@mantine/core';

import ApplicationShell from '../layout/ApplicationShell/ApplicationShell.component';
import { useEffect } from 'react';

const AdministratorRoutes = () => {
  useEffect(() => {
    console.log('RENDER - [AdministratorRoutes]');
  });

  return (
    <Routes>
      <Route element={<ApplicationShell />}>
        <Route index element={<Title>Index del adminisrador</Title>} />
        <Route
          path="dashboard"
          element={<Title>Dashboard del administrador</Title>}
        />
        <Route
          path="tutoriales"
          element={<Title>Tutoriales del administrador</Title>}
        />
        <Route path="*" element={<p>Not found</p>} />
      </Route>
    </Routes>
  );
};

export default AdministratorRoutes;
