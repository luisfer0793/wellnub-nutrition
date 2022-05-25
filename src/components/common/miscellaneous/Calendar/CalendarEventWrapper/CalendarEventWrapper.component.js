import { cloneElement } from 'react';
import { createStyles } from '@mantine/core';
import { CALENDAR_EVENT_TYPES } from 'utils/constants.util';

const useStyles = createStyles((theme, { variant }) => {
  const color =
    {
      [CALENDAR_EVENT_TYPES.ANALYSIS]: theme.colors.teal,
      [CALENDAR_EVENT_TYPES.APPOINTMENT]: theme.colors.violet,
      [CALENDAR_EVENT_TYPES.FREE]: theme.colors.yellow,
      [CALENDAR_EVENT_TYPES.RANDOM]: theme.colors.red,
    }[variant] ?? theme.colors.gray;

  return {
    eventWrapper: {
      fontSize: '1.4rem !important',
      borderRadius: `${theme.radius.sm} !important`,
      color: `${color[9]} !important`,
      border: `.1rem solid ${color[3]} !important`,
      backgroundColor: `${color[1]} !important`,
      transition: 'all linear 100ms !important',
      '&:hover': {
        backgroundColor: `${color[2]} !important`,
        cursor: 'pointer !important',
      },
    },
  };
});

const CalendarEventWrapper = ({ children, event }) => {
  const {
    classes: { eventWrapper },
    cx,
  } = useStyles({ variant: event?.type });

  return cloneElement(children, {
    className: cx(children.props.className, eventWrapper),
  });
};
export default CalendarEventWrapper;
