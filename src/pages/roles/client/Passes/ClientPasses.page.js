import { Title } from '@mantine/core';
import { WithHelmet } from 'components';
import { useAuthentication } from 'hooks';

const ClientPassesPage = () => {
  const { user } = useAuthentication();

  if (false) {
    return (
      <WithHelmet title={`${user.name} | Mis pases | Wellnub`}>
        <Title order={1}>Cargando ...</Title>
      </WithHelmet>
    );
  }

  return (
    <WithHelmet noLayout title={`${user.name} | Mis pases | Wellnub`}>
      <Title order={1}>Pases</Title>
      {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
    </WithHelmet>
  );
};

export default ClientPassesPage;
