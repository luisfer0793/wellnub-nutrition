import { WithHelmet } from 'components';

import { Title } from '@mantine/core';

import { useAuthentication } from 'hooks';

const ClientLandingPage = () => {
  const { user } = useAuthentication();

  return (
    <WithHelmet noLayout title={`${user.name} | Home | Wellnub`}>
      <Title order={1}>Bienvenido de nuevo {user.name}</Title>
    </WithHelmet>
  );
};

export default ClientLandingPage;
