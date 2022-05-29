import { Fragment } from 'react';
import { Container, Title } from '@mantine/core';
import { useStyles } from './PageShell.styles';
import { useElementSize } from '@mantine/hooks';

const PageShell = ({ title, children }) => {
  const { height, ref } = useElementSize();

  const { classes } = useStyles({ headerHeight: height });

  return (
    <Fragment>
      <section className={classes.header} ref={ref}>
        <Container fluid className={classes.container}>
          <Title order={5} className={classes.title}>
            {title}
          </Title>
        </Container>
      </section>
      <section className={classes.content}>
        <Container fluid className={classes.container}>
          {children}
        </Container>
      </section>
    </Fragment>
  );
};

export default PageShell;
