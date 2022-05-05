import { Container, Grid, Text, Title } from '@mantine/core';
import { useStyles } from './Footer.styles';

const Footer = () => {
  const { classes, cx } = useStyles();

  return (
    <footer className={cx(classes.footer, classes.section)}>
      <Container size="xl">
        <Grid>
          <Grid.Col span={3}>
            <Title order={4} className={classes.title}>
              WELLNUB
            </Title>
            <Text size="sm" className={classes.text}>
              Wellnub e InBody&reg; son una marca registrada. Todos los derechos
              reservados. 2022
            </Text>
          </Grid.Col>
          <Grid.Col span={3}>
            <Title order={5} className={classes.title}>
              Empresa
            </Title>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Text size="sm" className={classes.text}>
                  Aviso de privacidad
                </Text>
              </li>
              <li className={classes.listItem}>
                <Text size="sm" className={classes.text}>
                  Términos y condiciones
                </Text>
              </li>
            </ul>
          </Grid.Col>
          <Grid.Col span={3}>
            <Title order={5} className={classes.title}>
              Soporte
            </Title>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Text size="sm" className={classes.text}>
                  FAQ
                </Text>
              </li>
              <li className={classes.listItem}>
                <Text size="sm" className={classes.text}>
                  Trabaja con nosotros
                </Text>
              </li>
            </ul>
          </Grid.Col>
          <Grid.Col span={3}>
            <Title order={5} className={classes.title}>
              Social
            </Title>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Text size="sm" className={classes.text}>
                  Instagram
                </Text>
              </li>
              <li className={classes.listItem}>
                <Text size="sm" className={classes.text}>
                  Facebook
                </Text>
              </li>
            </ul>
          </Grid.Col>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
