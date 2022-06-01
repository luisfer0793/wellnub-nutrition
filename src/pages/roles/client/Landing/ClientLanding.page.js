import { WithHelmet } from 'components';

import { Button, Title } from '@mantine/core';

import { useAuthentication, useDrawer } from 'hooks';
import { DRAWERS } from 'utils/constants.util';

const ClientLandingPage = () => {
  const { user } = useAuthentication();

  const { handleOpen } = useDrawer(DRAWERS.CLIENT.CHECKOUT);

  return (
    <WithHelmet noLayout title={`${user.name} | Home | Wellnub`}>
      <Title order={1}>Bienvenido de nuevo {user.name}</Title>
      <Button color="green" onClick={handleOpen}>
        Finaliza tu compra
      </Button>
    </WithHelmet>
  );
};

export default ClientLandingPage;
