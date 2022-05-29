import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  Badge,
  Button,
  Divider,
  Group,
  Stack,
  Text,
  Title,
  Tooltip,
} from '@mantine/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faHouse,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

import { useAnalyticsEventTracker } from 'hooks';

import { useStyles } from './NutritionistCard.styles';

const NutritionistCard = ({ nutritionist }) => {
  const { eventTracker } = useAnalyticsEventTracker('NutritionistCard');

  const navigate = useNavigate();

  const { classes } = useStyles({ banner: nutritionist.bannerImage });

  const onConectClickHandler = () => {
    eventTracker(`ConectOnNutritionist${nutritionist.name}`, 'Conect');
  };

  const onReadMoreClickHandler = () => {
    const name = nutritionist.name.toLowerCase().split(' ').join('-');
    navigate(name);
  };

  return (
    <article className={classes.card}>
      <div className={classes.infoWrapper}>
        <header className={classes.header} />
        <main className={classes.main}>
          <Avatar
            src={nutritionist.image}
            radius="50%"
            className={classes.avatar}
          />
          <Title order={5}>{nutritionist.name}</Title>
          <Text size="sm">{nutritionist.title}</Text>
          <Group position="center">
            {nutritionist.services.map(service => (
              <Tooltip
                key={service.id}
                withArrow
                color="teal"
                label={service.title}
                placement="end"
                position="bottom"
              >
                <FontAwesomeIcon
                  icon={
                    {
                      'En línea': faGlobe,
                      Presencial: faHouse,
                      'A domicilio': faLocationDot,
                    }[service.title]
                  }
                  size="sm"
                />
              </Tooltip>
            ))}
          </Group>
        </main>
        <Divider />
        <section className={classes.buttonSection}>
          <Group
            position="center"
            spacing="md"
            className={classes.buttonWrapper}
          >
            <Button color="green" size="xs" onClick={onConectClickHandler}>
              Conectar
            </Button>
            <Button
              variant="outline"
              color="green"
              size="xs"
              onClick={onReadMoreClickHandler}
            >
              Ver más
            </Button>
          </Group>
        </section>
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
