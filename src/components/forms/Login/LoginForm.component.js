import { useForm } from 'react-hook-form';
import { Button, Checkbox, Divider, Text } from '@mantine/core';
import TextInputControlled from '../../common/inputs/TextInputControlled/TextInputControlled.component';
import PasswordInputControlled from '../../common/inputs/PasswordInputControlled/PasswordInputControlled.component';

import { useLogInService } from 'network/services/common';

const LoginForm = () => {
  const { mutate: login, isLoading } = useLogInService();

  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmitHandler = data => {
    login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)}>
      <TextInputControlled
        control={control}
        name="email"
        size="md"
        placeholder="user@example.com"
      />
      <br />
      <PasswordInputControlled
        control={control}
        name="password"
        size="md"
        placeholder="Tu contraseña"
      />
      <br />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Checkbox label="Recordar" />
        <Text variant="link" size="sm" weight={700} color="green">
          ¿Olvidaste tu contraseña?
        </Text>
      </div>
      <br />
      <Button
        loading={isLoading}
        color="green"
        type="submit"
        style={{ marginBottom: 20 }}
      >
        Iniciar sesión
      </Button>
      <Divider />
      <Text size="sm" style={{ marginTop: 20 }}>
        ¿Aún no tienes cuenta? Regístrate{' '}
        <Text component="span" size="sm" weight={700}>
          aquí
        </Text>
      </Text>
    </form>
  );
};

export default LoginForm;
