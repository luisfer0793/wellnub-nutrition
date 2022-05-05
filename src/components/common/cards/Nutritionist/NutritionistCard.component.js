import {
  Avatar,
  Badge,
  Button,
  Group,
  Stack,
  Text,
  Title,
} from '@mantine/core';

import { useAnalyticsEventTracker } from 'hooks/useAnalyticsEventTracker.hook';

import { useStyles } from './NutritionistCard.styles';

const NutritionistCard = ({ nutritionist }) => {
  const { eventTracker } = useAnalyticsEventTracker('NutritionistCard');

  const { classes } = useStyles();

  const onConectClickHandler = () => {
    eventTracker(`ConectOnNutritionist${nutritionist.name}`, 'Conect');
  };

  return (
    <article className={classes.card}>
      <div className={classes.infoWrapper}>
        <header className={classes.header}></header>
        <main className={classes.main}>
          <Avatar
            src={nutritionist.image}
            size="xl"
            radius="50%"
            className={classes.avatar}
          />
          <Title order={5} className={classes.title}>
            {nutritionist.name}
          </Title>
          <Text size="sm">{nutritionist.title}</Text>
          <Group
            position="center"
            spacing="md"
            className={classes.buttonWrapper}
          >
            <Button color="green" size="xs" onClick={onConectClickHandler}>
              Conectar
            </Button>
            <Button variant="outline" color="green" size="xs">
              Ver más
            </Button>
          </Group>
        </main>
      </div>

      <footer className={classes.footer}>
        <Text size="sm" className={classes.footerTitle}>
          Especialidades
        </Text>
        <Stack align="center">
          {nutritionist.specialties.map(badge => (
            <Badge
              radius="xs"
              color="gray"
              variant="outline"
              key={badge.id}
              className={classes.badge}
            >
              {badge.title}
            </Badge>
          ))}
        </Stack>
      </footer>
    </article>
  );
};

export default NutritionistCard;
