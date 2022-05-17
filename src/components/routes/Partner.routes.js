import { Routes, Route } from 'react-router-dom';

import { Title } from '@mantine/core';

import ApplicationShell from '../layout/ApplicationShell/ApplicationShell.component';
import { useEffect } from 'react';

const PartnerRoutes = () => {
  useEffect(() => {
    console.log('RENDER - [PartnerRoutes]');
  });
  return (
    <Routes>
      <Route element={<ApplicationShell />}>
        <Route index element={<Title>Index del partner</Title>} />
        <Route
          path="dashboard"
          element={<Title>Dashboard del partner</Title>}
        />
        <Route
          path="tutoriales"
          element={<Title>Tutoriales del partner</Title>}
        />
        <Route path="*" element={<p>Not found</p>} />
      </Route>
    </Routes>
  );
};

export default PartnerRoutes;
