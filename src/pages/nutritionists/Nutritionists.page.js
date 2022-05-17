import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Container, Title } from '@mantine/core';

import { NutritionistCard, WithHelmet } from 'components';

import { nutritionistsSelector } from 'redux/slices/nutritionists/nutritionists.selector';

import { NUTRITIONISTS_META_TAGS } from 'utils/constants.util';

import { useStyles } from './Nutritionists.styles';

const NutritionistsPage = () => {
  const nutritionists = useSelector(nutritionistsSelector);

  const { classes } = useStyles();

  return (
    <WithHelmet
      metaTags={NUTRITIONISTS_META_TAGS}
      title="Wellnub | Nutriólogos"
    >
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
    </WithHelmet>
  );
};

export default NutritionistsPage;
