import { useForm } from 'react-hook-form';
import { Button } from '@mantine/core';
import { yupResolver } from '@hookform/resolvers/yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faUserClock } from '@fortawesome/free-solid-svg-icons';
import ControlledTextInput from '../../common/inputs/ControlledTextInput.component';
import ControlledTimeRangeInput from '../../common/inputs/ControlledTimeRangeInput.component';
import ControlledTextAreaInput from '../../common/inputs/ControlledTextAreaInput.component';
import { defaultValues, CalendarEventSchema } from './CalendarEvent.schema';

const CalendarEventForm = () => {
  const { control, handleSubmit } = useForm({
    defaultValues,
    resolver: yupResolver(CalendarEventSchema),
  });

  const onSubmitHandler = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} noValidate>
      <ControlledTextInput
        control={control}
        required
        name="title"
        label="Título"
        description="Nombre del evento"
        placeholder="Título"
        icon={<FontAwesomeIcon icon={faTags} size="sm" />}
      />
      <br />
      <ControlledTimeRangeInput
        required
        name="range"
        label="Duración"
        description="Hora de inicio y fin"
        placeholder="Duración"
        control={control}
        icon={<FontAwesomeIcon icon={faUserClock} size="sm" />}
      />
      <br />
      <ControlledTextAreaInput
        label="Notas"
        description="Descripción del evento"
        control={control}
        name="description"
        placeholder="Fin"
      />
      <br />
      <Button type="submit" color="green">
        Actualizar
      </Button>
    </form>
  );
};

export default CalendarEventForm;
