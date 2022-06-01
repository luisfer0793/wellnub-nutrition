import { Drawer } from '@mantine/core';
import { useDrawer } from 'hooks';
import { DRAWERS } from 'utils/constants.util';
import PaymentMethodForm from '../../../forms/PaymentMethod/PaymentMethodForm.component';

const PaymentMethodDrawer = () => {
  const { isVisible, handleClose } = useDrawer(DRAWERS.CLIENT.PAYMENT_METHOD);

  const onSubmitHandler = data => {
    console.log('Data: ', data);
  };

  return (
    <Drawer
      opened={isVisible}
      onClose={handleClose}
      size="xl"
      padding="xl"
      position="right"
      title="Agregar método de págo"
    >
      <PaymentMethodForm onSubmit={onSubmitHandler} />
    </Drawer>
  );
};

export default PaymentMethodDrawer;
