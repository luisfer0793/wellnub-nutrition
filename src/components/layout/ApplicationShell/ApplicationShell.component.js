import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import { default as Header } from '../Header/Header.component';
import { default as Navbar } from '../Navbar/Navbar.component';

const ApplicationShell = () => {
  return (
    <AppShell fixed padding="md" header={<Header />} navbar={<Navbar />}>
      <Outlet />
    </AppShell>
  );
};

export default ApplicationShell;
