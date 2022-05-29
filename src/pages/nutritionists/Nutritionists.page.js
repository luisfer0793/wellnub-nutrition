import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import { Container, Grid, TextInput, Title } from '@mantine/core';

import { NutritionistCard, WithHelmet } from 'components';

import { nutritionistsSelector } from 'redux/slices/nutritionists/nutritionists.selector';

import { NUTRITIONISTS_META_TAGS } from 'utils/constants.util';

import { useStyles } from './Nutritionists.styles';
import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';

const NutritionistsPage = () => {
  const [search, setSearch] = useState('');

  const nutritionists = useSelector(nutritionistsSelector);

  const { classes } = useStyles();

  const onSearchChangeHandler = event => {
    setSearch(event.target.value);
  };

  return (
    <WithHelmet
      metaTags={NUTRITIONISTS_META_TAGS}
      title="Wellnub | Nutriólogos"
    >
      <Container size="xl">
        <Title align="center" order={1} className={classes.title}>
          Nutriólogos
        </Title>
        <TextInput
          placeholder="Escribe un nombre para buscar"
          label="Buscar"
          onChange={onSearchChangeHandler}
        />
        <br />
        <Grid>
          {nutritionists
            .filter(nutritionist =>
              nutritionist.name.toLowerCase().includes(search.toLowerCase()),
            )
            .map(item => (
              <Grid.Col key={nanoid()} xs={12} sm={6}>
                <NutritionistCard nutritionist={item} />
              </Grid.Col>
            ))}
        </Grid>
      </Container>
      <Outlet />
    </WithHelmet>
  );
};

export default NutritionistsPage;
