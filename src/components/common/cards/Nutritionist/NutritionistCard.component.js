import {
  Avatar,
  Badge,
  Button,
  Card,
  Divider,
  Group,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core';
import { useStyles } from './NutritionistCard.styles';

const badges = [
  { id: 'badge-1', title: 'Alimentación cetogénica' },
  { id: 'badge-2', title: 'Bulimia, anorexia y otros' },
  { id: 'badge-3', title: 'Control de peso' },
  { id: 'badge-4', title: 'Cirugía barítica' },
  { id: 'badge-5', title: 'Alimentación vegetariana' },
];

const NutritionistCard = ({ nutritionist }) => {
  const { classes } = useStyles();

  return (
    <article className={classes.card}>
      <div className={classes.infoWrapper}>
        <header className={classes.header}></header>
        <main className={classes.main}>
          <Avatar
            src="https://images.unsplash.com/photo-1614436163996-25cee5f54290?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1942&q=80"
            size="xl"
            radius="50%"
            className={classes.avatar}
          />
          <Title order={5} className={classes.title}>
            Fernando Jiménez
          </Title>
          <Text size="sm">
            Nutriólogo especializado en dietas y nutrición vegana
          </Text>
          <Group
            position="center"
            spacing="md"
            className={classes.buttonWrapper}
          >
            <Button color="green" size="xs">
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
          {badges.map(badge => (
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
