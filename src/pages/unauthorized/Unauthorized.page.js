import { useNavigate } from 'react-router-dom';
import { Button, Container, Text, Title } from '@mantine/core';
import { WithHelmet } from 'components';

const UnauthorizedPage = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(-1);
  };

  return (
    <WithHelmet title="Acceso restringido | Wellnub">
      <Container size="xl">
        <Title order={1}>Acceso Restringido</Title>
        <Text>Aquí no hay nada para ti</Text>
        <Button color="green" onClick={onClickHandler}>
          Regresar
        </Button>
      </Container>
    </WithHelmet>
  );
};

export default UnauthorizedPage;
