import { useState } from 'react';
import { useForm } from 'react-hook-form';
import CreditCard from 'react-credit-cards';
import { Button } from '@mantine/core';
import TextInputControlled from '../../common/inputs/ControlledTextInput.component';
import 'react-credit-cards/es/styles-compiled.css';

const PaymentMethodForm = ({ onSubmit }) => {
  const [focusOn, setFocusOn] = useState('');

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      name: '',
      number: '',
      cvc: '',
      expiry: '',
    },
  });

  const CARD = watch();

  const onFocusChangeHandler = event => {
    const { name } = event.target;
    setFocusOn(name);
  };

  return (
    <div>
      <CreditCard
        cvc={CARD.cvc}
        expiry={CARD.expiry}
        name={CARD.name}
        number={CARD.number}
        focused={focusOn}
        locale={{ valid: 'válido hasta' }}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInputControlled
          name="name"
          label="Nombre"
          control={control}
          onFocus={onFocusChangeHandler}
          placeholder="Nombre que aparece en la tarjeta"
        />
        <br />
        <TextInputControlled
          name="number"
          control={control}
          label="Número"
          onFocus={onFocusChangeHandler}
          placeholder="Número de la tarjeta"
        />
        <br />
        <TextInputControlled
          name="cvc"
          control={control}
          label="CVC"
          onFocus={onFocusChangeHandler}
          placeholder="Código de seguridad"
        />
        <br />
        <TextInputControlled
          name="expiry"
          control={control}
          label="Expiración"
          onFocus={onFocusChangeHandler}
          placeholder="Fecha de expiración"
        />
        <br />
        <Button type="submit" color="green">
          Agregar tarjeta
        </Button>
      </form>
    </div>
  );
};

export default PaymentMethodForm;
