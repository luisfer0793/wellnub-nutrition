import { WithHelmet } from 'components';

import { Alert, Center, Title, Loader } from '@mantine/core';

import { useAuthentication } from 'hooks';

import { useAppointmentsService } from 'network/services/client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

const ClientCalendarPage = () => {
  const { user } = useAuthentication();

  const { data, isLoading, error } = useAppointmentsService();

  const pageTitle = `${user.name} | Mi Calendario | Wellnub`;

  if (isLoading) {
    return (
      <WithHelmet noLayout title={pageTitle}>
        <Center>
          <Loader color="green" size="xl" />
        </Center>
      </WithHelmet>
    );
  }

  if (error?.code === 'ERR_NETWORK') {
    return (
      <WithHelmet noLayout title={pageTitle}>
        <Alert
          icon={<FontAwesomeIcon icon={faCircleExclamation} />}
          title="Error de Conexión"
          color="red"
        >
          No se pudo cargar la información. Revisa tu conexión a internet.
        </Alert>
      </WithHelmet>
    );
  }

  return (
    <WithHelmet noLayout title={pageTitle}>
      <Title order={1}>Calendario de {user.name}</Title>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </WithHelmet>
  );
};

export default ClientCalendarPage;
