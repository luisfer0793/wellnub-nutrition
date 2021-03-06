import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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
      <AnimatePresence>
        <motion.div
          key="login-page"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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
        </motion.div>
      </AnimatePresence>
    </WithHelmet>
  );
};

export default LoginPage;
