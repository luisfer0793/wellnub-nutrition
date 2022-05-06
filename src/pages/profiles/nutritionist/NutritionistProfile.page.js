import { useParams } from 'react-router-dom';
import { Container, Title } from '@mantine/core';
import { PageLayout } from 'components';

const NutritionistProfilePage = () => {
  const { id } = useParams();

  return (
    <PageLayout>
      <Container>
        <Title order={1}>Detalle del nutriólogo {id}</Title>
      </Container>
    </PageLayout>
  );
};

export default NutritionistProfilePage;
