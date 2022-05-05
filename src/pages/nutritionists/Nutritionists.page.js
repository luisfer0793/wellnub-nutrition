import { Container, Title } from '@mantine/core';

import { NutritionistCard } from 'components';
import { useStyles } from './Nutritionists.styles';

const NutritionistsPage = () => {
  const { classes } = useStyles();

  return (
    <Container size="xl">
      <Title align="center" order={1} className={classes.title}>
        Nutriólogos
      </Title>
      <div className={classes.grid}>
        <NutritionistCard />
        <NutritionistCard />
        <NutritionistCard />
        <NutritionistCard />
      </div>
    </Container>
  );
};

export default NutritionistsPage;
