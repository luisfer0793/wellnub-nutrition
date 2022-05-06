import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Container, Title } from '@mantine/core';

import { NutritionistCard, PageLayout } from 'components';

import { nutritionistsSelector } from 'redux/slices/nutritionists/nutritionists.selector';

import { useStyles } from './Nutritionists.styles';

const NutritionistsPage = () => {
  const nutritionists = useSelector(nutritionistsSelector);

  const { classes } = useStyles();

  return (
    <PageLayout>
      <Container size="xl">
        <Title align="center" order={1} className={classes.title}>
          Nutriólogos
        </Title>
        <div className={classes.grid}>
          {nutritionists.map(item => (
            <NutritionistCard key={item.id} nutritionist={item} />
          ))}
        </div>
      </Container>
      <Outlet />
    </PageLayout>
  );
};

export default NutritionistsPage;
