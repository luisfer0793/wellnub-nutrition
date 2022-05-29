import {
  Button,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faLocationDot,
  faTriangleExclamation,
  faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';
import { format, differenceInDays, isToday as isTodayFn } from 'date-fns';
import { es } from 'date-fns/locale';
import { useStyles } from './AppointmentCard.styles';

const AppointmentCard = ({ appointment }) => {
  const {
    location: {
      name = 'Partner',
      address: { neighborhood = 'Colonia' } = {},
    } = {},
    scheduleDate = new Date(2022, 4, 31),
  } = appointment;

  const isToday = isTodayFn(new Date(scheduleDate));

  const differenceDays = differenceInDays(new Date(scheduleDate), new Date());

  const variant = differenceDays > 5 || differenceDays < 0 ? 'INFO' : 'WARNING';

  const { classes, cx } = useStyles({ variant });

  const onShowDetailsClickHandler = () => {
    console.log('Detalles de la cita: ', appointment);
  };

  return (
    <Paper shadow="xs" p="md">
      <Title order={6} className={classes.title}>
        Análisis corporal agendado
      </Title>
      <Divider />
      <Stack spacing="sm" sx={theme => ({ marginTop: theme.spacing.sm })}>
        <Group>
          <ThemeIcon variant="light" color="red">
            <FontAwesomeIcon icon={faLocationDot} size="sm" />
          </ThemeIcon>
          <Text className={classes.text}>
            {name} - {neighborhood}
          </Text>
        </Group>
        <Group>
          <ThemeIcon variant="light" color="indigo">
            <FontAwesomeIcon icon={faClock} size="sm" />
          </ThemeIcon>
          <Text className={classes.text}>
            {format(new Date(scheduleDate), 'PPPP', { locale: es })}
          </Text>
        </Group>
      </Stack>
      <div className={cx(classes.footer, classes.alert)}>
        <div className={classes.flex}>
          <Group>
            <FontAwesomeIcon
              icon={variant === 'INFO' ? faCircleInfo : faTriangleExclamation}
              className={classes.alertIcon}
            />
            <Text className={classes.alertMessage}>
              {isToday
                ? 'Tu cita es hoy'
                : variant === 'INFO'
                ? 'Recuerda llegar puntual'
                : `Tu cita es en ${differenceDays} ${
                    differenceDays === 1 ? 'día' : 'días'
                  }`}
            </Text>
          </Group>
          <Button
            variant="subtle"
            size="xs"
            color={`${variant === 'INFO' ? 'gray' : 'yellow'}`}
            onClick={onShowDetailsClickHandler}
          >
            Ver detalles
          </Button>
        </div>
      </div>
    </Paper>
  );
};

export default AppointmentCard;
