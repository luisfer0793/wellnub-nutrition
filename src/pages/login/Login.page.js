import { Link } from 'react-router-dom';
import { Center, Container, MediaQuery, Text, Title } from '@mantine/core';

import { LoginForm, WithHelmet } from 'components';

import { LOGIN_PAGE_META_TAGS } from 'utils/constants.util';

import { useStyles } from './Login.styles';

const LoginPage = () => {
  const { classes } = useStyles();

  return (
    <WithHelmet
      noLayout
      title="Iniciar sesión | Wellnub"
      metaTags={LOGIN_PAGE_META_TAGS}
    >
      <div className={classes.wrapper}>
        <Center component="section" className={classes.center}>
          <Container>
            <Title order={3}>Inicia sesión en Wellnub</Title>
            <Text size="sm" className={classes.formSubtitle}>
              Escribe tu correo y contraseña para continuar
            </Text>
            <LoginForm />
            <Text
              variant="link"
              weight={700}
              color="green"
              component={Link}
              to="/"
              sx={{
                fontSize: '1.4rem',
                marginTop: '2rem',
                display: 'inline-block',
              }}
            >
              Volver a la página principal
            </Text>
          </Container>
        </Center>
        <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
          <section className={classes.bannerSection}></section>
        </MediaQuery>
      </div>
    </WithHelmet>
  );
};

export default LoginPage;
