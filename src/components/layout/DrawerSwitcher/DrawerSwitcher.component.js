import { Fragment } from 'react';
import { useAuthentication, useDrawer } from 'hooks';
import { Button, Drawer } from '@mantine/core';
import { DRAWERS, ROLES } from 'utils/constants.util';
import PaymentMethodDrawer from '../../drawers/client/PaymentMethod/PaymentMethodDrawer.component';

const DrawerSwitcher = () => {
  const { user } = useAuthentication();

  const CLIENT_CREDIT_CARD_DRAWER = useDrawer(DRAWERS.CLIENT.PAYMENT_METHOD);
  const CLIENT_CHECKOUT_DRAWER = useDrawer(DRAWERS.CLIENT.CHECKOUT);

  return (
    user.role === ROLES.CLIENT && (
      <Fragment>
        <Drawer
          size="xl"
          padding="xl"
          position="right"
          title="Finaliza tu compra"
          opened={CLIENT_CHECKOUT_DRAWER.isVisible}
          onClose={CLIENT_CHECKOUT_DRAWER.handleClose}
        >
          <Button onClick={CLIENT_CREDIT_CARD_DRAWER.handleOpen}>
            Agregar forma de pago
          </Button>
        </Drawer>
        <PaymentMethodDrawer />
      </Fragment>
    )
  );
};

export default DrawerSwitcher;
