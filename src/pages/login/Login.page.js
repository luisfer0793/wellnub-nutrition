import { Text, Title } from '@mantine/core';

import { LoginForm } from 'components';

import { useStyles } from './Login.styles';

const LoginPage = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <section className={classes.formSection}>
        <div className={classes.formWrapper}>
          <Title order={1} className={classes.formTitle}>
            Inicia sesión en Wellnub
          </Title>
          <Text size="sm" className={classes.formSubtitle}>
            Escribe tu correo y contraseña para continuar
          </Text>
          <LoginForm />
        </div>
      </section>
      <section className={classes.bannerSection}></section>
    </div>
  );
};

export default LoginPage;
