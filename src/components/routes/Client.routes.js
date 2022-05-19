import { Routes, Route } from 'react-router-dom';

import { Title } from '@mantine/core';

import { ClientLandingPage, ClientCalendarPage, ClientPassesPage } from 'pages';

import ApplicationShell from '../layout/ApplicationShell/ApplicationShell.component';

const ClientRoutes = () => (
  <Routes>
    <Route element={<ApplicationShell />}>
      <Route index element={<ClientLandingPage />} />
      <Route path="dashboard" element={<Title>Dashboard del cliente</Title>} />
      <Route path="calendario" element={<ClientCalendarPage />} />
      <Route path="pases" element={<ClientPassesPage />} />
      <Route
        path="tutoriales"
        element={<Title>Tutoriales del cliente</Title>}
      />
      <Route path="*" element={<p>Not found</p>} />
    </Route>
  </Routes>
);

export default ClientRoutes;
