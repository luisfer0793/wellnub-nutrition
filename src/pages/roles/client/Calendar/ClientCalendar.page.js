import { Fragment } from 'react';
import { useModals } from '@mantine/modals';
import { WithHelmet, WNCalendar } from 'components';

import {
  Alert,
  Center,
  Title,
  Loader,
  Container,
  Button,
  Text,
} from '@mantine/core';

import { useAuthentication } from 'hooks';

import { useAppointmentsService } from 'network/services/client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import { useStyles } from './ClientCalendar.styles';

const ClientCalendarPage = () => {
  const { user } = useAuthentication();

  const { isLoading, error } = useAppointmentsService();

  const modals = useModals();

  const {
    classes: { title, actionSection },
  } = useStyles();

  const pageTitle = `${user.name} | Mi Calendario | Wellnub`;

  const onCreateNewEventClickHandler = () => {
    modals.openModal({
      title: 'Nuevo Evento',
      centered: true,
      children: (
        <Fragment>
          <Text component="p">
            Este evento se agregará a tu calendario de manera automática
          </Text>
        </Fragment>
      ),
    });
  };

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
      <Container size="xl">
        <Title order={1} className={title}>
          Calendario de {user.name}
        </Title>
        <section className={actionSection}>
          <Button color="green" onClick={onCreateNewEventClickHandler}>
            Agregar evento
          </Button>
        </section>
        <WNCalendar />
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet
          consequuntur cumque deleniti iure libero minima nihil nisi quod,
          ratione repellat repellendus, ullam voluptates! Aspernatur assumenda
          ducimus, est eveniet molestiae officia pariatur possimus, provident
          repellat similique ut voluptas voluptatum! Cupiditate dolores dolorum
          eos harum ipsam perferendis porro quam repellendus sed.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet
          consequuntur cumque deleniti iure libero minima nihil nisi quod,
          ratione repellat repellendus, ullam voluptates! Aspernatur assumenda
          ducimus, est eveniet molestiae officia pariatur possimus, provident
          repellat similique ut voluptas voluptatum! Cupiditate dolores dolorum
          eos harum ipsam perferendis porro quam repellendus sed.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet
          consequuntur cumque deleniti iure libero minima nihil nisi quod,
          ratione repellat repellendus, ullam voluptates! Aspernatur assumenda
          ducimus, est eveniet molestiae officia pariatur possimus, provident
          repellat similique ut voluptas voluptatum! Cupiditate dolores dolorum
          eos harum ipsam perferendis porro quam repellendus sed.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet
          consequuntur cumque deleniti iure libero minima nihil nisi quod,
          ratione repellat repellendus, ullam voluptates! Aspernatur assumenda
          ducimus, est eveniet molestiae officia pariatur possimus, provident
          repellat similique ut voluptas voluptatum! Cupiditate dolores dolorum
          eos harum ipsam perferendis porro quam repellendus sed.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet
          consequuntur cumque deleniti iure libero minima nihil nisi quod,
          ratione repellat repellendus, ullam voluptates! Aspernatur assumenda
          ducimus, est eveniet molestiae officia pariatur possimus, provident
          repellat similique ut voluptas voluptatum! Cupiditate dolores dolorum
          eos harum ipsam perferendis porro quam repellendus sed.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet
          consequuntur cumque deleniti iure libero minima nihil nisi quod,
          ratione repellat repellendus, ullam voluptates! Aspernatur assumenda
          ducimus, est eveniet molestiae officia pariatur possimus, provident
          repellat similique ut voluptas voluptatum! Cupiditate dolores dolorum
          eos harum ipsam perferendis porro quam repellendus sed.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet
          consequuntur cumque deleniti iure libero minima nihil nisi quod,
          ratione repellat repellendus, ullam voluptates! Aspernatur assumenda
          ducimus, est eveniet molestiae officia pariatur possimus, provident
          repellat similique ut voluptas voluptatum! Cupiditate dolores dolorum
          eos harum ipsam perferendis porro quam repellendus sed.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet
          consequuntur cumque deleniti iure libero minima nihil nisi quod,
          ratione repellat repellendus, ullam voluptates! Aspernatur assumenda
          ducimus, est eveniet molestiae officia pariatur possimus, provident
          repellat similique ut voluptas voluptatum! Cupiditate dolores dolorum
          eos harum ipsam perferendis porro quam repellendus sed.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet
          consequuntur cumque deleniti iure libero minima nihil nisi quod,
          ratione repellat repellendus, ullam voluptates! Aspernatur assumenda
          ducimus, est eveniet molestiae officia pariatur possimus, provident
          repellat similique ut voluptas voluptatum! Cupiditate dolores dolorum
          eos harum ipsam perferendis porro quam repellendus sed.
        </Text>
      </Container>
    </WithHelmet>
  );
};

export default ClientCalendarPage;
