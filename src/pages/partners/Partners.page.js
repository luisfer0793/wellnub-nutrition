import { WithHelmet } from 'components';
import { PARTNERS_META_TAGS } from 'utils/constants.util';
import { Button, Container, Group, Title } from '@mantine/core';
import { useStyles } from './Partners.styles';
import { useModals } from '@mantine/modals';

const PartnersPage = () => {
  const { openContextModal } = useModals();

  const { classes } = useStyles();

  const onAddPartnerClickHandler = () =>
    openContextModal('searchPartner', {
      title: 'Buscar paciente',
    });

  return (
    <WithHelmet title="Wellnub | Partners" metaTags={PARTNERS_META_TAGS}>
      <Container size="xl">
        <Title align="center" order={1} className={classes.title}>
          Partners
        </Title>
        <Group position="center">
          <Button color="green" onClick={onAddPartnerClickHandler}>
            Agregar partner
          </Button>
        </Group>
      </Container>
    </WithHelmet>
  );
};

export default PartnersPage;
