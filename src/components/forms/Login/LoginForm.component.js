import { useForm } from 'react-hook-form';
import { Button, Checkbox, Divider, Text } from '@mantine/core';
import ControlledTextInput from '../../common/inputs/ControlledTextInput.component';
import ControlledPasswordInput from '../../common/inputs/ControlledPasswordInput.component';

import { useLogInService } from 'network/services/common';
import { Link } from 'react-router-dom';

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
      <ControlledTextInput
        control={control}
        name="email"
        size="md"
        placeholder="user@example.com"
      />
      <br />
      <ControlledPasswordInput
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
        {/*<Button variant="subtle" color="green" size="sm">¿Olvidaste tu contraseña?</Button>*/}
        <Text
          variant="link"
          weight={700}
          color="green"
          component={Link}
          to="/recuperar-contraseña"
          sx={theme => ({ fontSize: '1.4rem' })}
        >
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
