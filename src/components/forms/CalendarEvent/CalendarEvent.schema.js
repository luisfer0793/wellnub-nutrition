import { object, string, array, date } from 'yup';
import { add } from 'date-fns';

export const defaultValues = {
  title: '',
  description: '',
  range: [new Date(), add(new Date(), { minutes: 30, days: 1 })],
};

export const CalendarEventSchema = object().shape({
  title: string()
    .required('Este campo es requerido')
    .max(30, 'El nombre del evento es demasiado grande'),
  description: string(),
  range: array().of(date()).required('Este campo es obligatorio'),
});
