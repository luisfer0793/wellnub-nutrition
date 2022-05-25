import { Fragment } from 'react';
import { format, parse, startOfWeek, getDay } from 'date-fns';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { Text, Title } from '@mantine/core';
import { useModals } from '@mantine/modals';
import { es } from 'date-fns/locale';

import CalendarEventWrapper from './CalendarEventWrapper/CalendarEventWrapper.component';
import CalendarCellWrapper from './CalendarCellWrapper/CalendarCellWrapper.component';

import { CALENDAR_EVENT_TYPES } from 'utils/constants.util';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarEventForm from '../../../forms/CalendarEvent/CalendarEvent.component';

const WNCalendar = () => {
  const modals = useModals();

  const locales = {
    'es-ES': es,
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const events = [
    {
      title: 'Congreso en Puebla',
      type: CALENDAR_EVENT_TYPES.APPOINTMENT,
      end: new Date(2022, 4, 22, 3, 24, 0),
      start: new Date(2022, 4, 20, 12, 15, 0),
    },
    {
      start: new Date(2022, 4, 22, 6, 24, 0),
      end: new Date(2022, 4, 22, 16, 24, 0),
      title: 'Consulta con Fernando',
      type: CALENDAR_EVENT_TYPES.ANALYSIS,
    },
    {
      start: new Date(2022, 4, 22, 8, 24, 0),
      end: new Date(2022, 4, 22, 20, 24, 0),
      title: 'Clases de bachata',
      type: CALENDAR_EVENT_TYPES.RANDOM,
    },
    {
      start: new Date(2022, 4, 22, 2, 24, 0),
      end: new Date(2022, 4, 22, 5, 24, 0),
      title: 'Cita con el doctor',
      type: CALENDAR_EVENT_TYPES.FREE,
    },
    {
      start: new Date(2022, 4, 22, 7, 24, 0),
      end: new Date(2022, 4, 22, 12, 24, 0),
      title: 'Congreso mundial',
      type: CALENDAR_EVENT_TYPES.APPOINTMENT,
    },
    {
      start: new Date(2022, 4, 22, 0, 24, 0),
      end: new Date(2022, 4, 22, 8, 24, 0),
      title: 'Euroson Latino',
      type: CALENDAR_EVENT_TYPES.RANDOM,
    },
  ];

  const onSelectEventHandler = event => {
    modals.openModal({
      title: event.title,
      centered: true,
      children: <CalendarEventForm />,
    });
  };

  const onSelectSlotHandler = event => {
    console.log(event);
  };

  return (
    <Calendar
      selectable
      culture="es"
      messages={{
        week: 'Semana',
        work_week: 'Semana de trabajo',
        day: 'Día',
        month: 'Mes',
        previous: 'Anterior',
        next: 'Siguiente',
        today: 'Hoy',
        agenda: 'Agenda',

        showMore: total => `+${total} más`,
      }}
      style={{ height: '60vh' }}
      localizer={localizer}
      events={events}
      components={{
        eventWrapper: CalendarEventWrapper,
        // dateCellWrapper: CalendarCellWrapper,
      }}
      startAccessor="start"
      endAccessor="end"
      onSelectEvent={onSelectEventHandler}
      onSelectSlot={onSelectSlotHandler}
    />
  );
};

export default WNCalendar;
