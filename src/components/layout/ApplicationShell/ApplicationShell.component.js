import { Outlet } from 'react-router-dom';
import { AppShell, Navbar } from '@mantine/core';
import { default as Header } from '../Header/Header.component';

const ApplicationShell = () => {
  return (
    <AppShell
      fixed
      padding="md"
      header={<Header />}
      navbar={<Navbar width={{ base: 200 }}>Soy el navbar</Navbar>}
    >
      <Outlet />
    </AppShell>
  );
};

export default ApplicationShell;
