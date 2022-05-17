import { Link } from 'react-router-dom';
import { Alert, Button, Stack, Text, Title } from '@mantine/core';

import { LoginForm, WithHelmet } from 'components';

import { LOGIN_PAGE_META_TAGS } from 'utils/constants.util';

import { useStyles } from './Login.styles';

const CREDENTIALS = [
  {
    id: 'credential-1',
    email: 'admin@wellnub.com',
    password: 'password',
    title: 'Administrador',
    color: 'grape',
  },
  {
    id: 'credential-2',
    email: 'partner@wellnub.com',
    password: 'password',
    title: 'Partner',
    color: 'pink',
  },
  {
    id: 'credential-3',
    email: 'nutriologo@wellnub.com',
    password: 'password',
    title: 'Nutriólogo',
    color: 'teal',
  },
  {
    id: 'credential-4',
    email: 'lf.jimenez+test3@wellnub.com',
    password: 'passw0rd',
    title: 'Cliente',
    color: 'yellow',
  },
];

const LoginPage = () => {
  const { classes } = useStyles();

  return (
    <WithHelmet
      noLayout
      title="Iniciar sesión | Wellnub"
      metaTags={LOGIN_PAGE_META_TAGS}
    >
      <div className={classes.wrapper}>
        <section className={classes.formSection}>
          <div className={classes.formWrapper}>
            <Title order={1} className={classes.formTitle}>
              Inicia sesión en Wellnub
            </Title>
            <Text size="sm" className={classes.formSubtitle}>
              Escribe tu correo y contraseña para continuar
            </Text>
            <Stack spacing="xl" className={classes.stack}>
              {CREDENTIALS.map(item => (
                <Alert key={item.id} title={item.title} color={item.color}>
                  <Text size="sm">
                    email:{' '}
                    <Text component="span" weight={700} size="sm">
                      {item.email}
                    </Text>{' '}
                    / contraseña:{' '}
                    <Text component="span" weight={700} size="sm">
                      {item.password}
                    </Text>
                  </Text>
                </Alert>
              ))}
            </Stack>
            <LoginForm />
            <Button
              mt={8}
              variant="subtle"
              component={Link}
              to="/"
              color="green"
            >
              Volver a la página principal
            </Button>
          </div>
        </section>
        <section className={classes.bannerSection}></section>
      </div>
    </WithHelmet>
  );
};

export default LoginPage;
