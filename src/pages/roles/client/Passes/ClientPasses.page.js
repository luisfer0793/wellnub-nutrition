import { Title } from '@mantine/core';
import { WithHelmet } from 'components';
import { useAuthentication } from 'hooks';
import { usePassesService } from 'network/services/client';

const ClientPassesPage = () => {
  const { user } = useAuthentication();
  const { data, isLoading } = usePassesService();

  if (isLoading) {
    return (
      <WithHelmet title={`${user.name} | Mis pases | Wellnub`}>
        <Title order={1}>Cargando ...</Title>
      </WithHelmet>
    );
  }

  return (
    <WithHelmet noLayout title={`${user.name} | Mis pases | Wellnub`}>
      <Title order={1}>Pases</Title>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </WithHelmet>
  );
};

export default ClientPassesPage;
