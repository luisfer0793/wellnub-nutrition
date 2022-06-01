import { Alert, Center, Grid, Loader } from '@mantine/core';
import { nanoid } from '@reduxjs/toolkit';
import { useAuthentication, useDashboardData } from 'hooks';
import { WithHelmet, AppointmentCard, PageShell } from 'components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
// import { useStyles } from './ClientDashboard.styles';

const ClientDashboardPage = () => {
  const { user } = useAuthentication();

  const {
    isError,
    isLoading,
    data: { appointments },
  } = useDashboardData();

  if (isLoading) {
    return (
      <WithHelmet noLayout title={`${user.name} | Dashboard | Wellnub`}>
        <PageShell title="Dashboard">
          <Center>
            <Loader size="xl" color="green" />
          </Center>
        </PageShell>
      </WithHelmet>
    );
  }

  if (isError) {
    return (
      <WithHelmet noLayout title={`${user.name} | Dashboard | Wellnub`}>
        <PageShell title="Dashboard">
          <Alert
            icon={<FontAwesomeIcon icon={faTriangleExclamation} />}
            color="red"
            title="Error"
            variant="filled"
          >
            No se pudo cargar la información. Intenta más tarde.
          </Alert>
        </PageShell>
      </WithHelmet>
    );
  }

  return (
    <WithHelmet noLayout title={`${user.name} | Dashboard | Wellnub`}>
      <PageShell title="Dashboard">
        <Grid sx={theme => ({ marginTop: theme.spacing.xs })}>
          {appointments.map(appointment => (
            <Grid.Col key={nanoid()} xs={12} sm={3}>
              <AppointmentCard appointment={appointment} />
            </Grid.Col>
          ))}
        </Grid>
      </PageShell>
    </WithHelmet>
  );
};

export default ClientDashboardPage;
