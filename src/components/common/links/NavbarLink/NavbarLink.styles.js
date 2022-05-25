import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  menuItem: {
    fontWeight: 500,
    fontSize: '1.4rem',
    position: 'relative',
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.xs,
    paddingLeft: theme.spacing.lg,
    textDecoration: 'none',
    transition: 'background-color linear 100ms, color linear 100ms',
    color: theme.colors.dark[5],
    [theme.fn.smallerThan('xs')]: {
      fontSize: '1.4rem',
      paddingLeft: 0,
      paddingBottom: '.5rem',
      paddingTop: '.5rem',
    },
    '&:hover': {
      color: theme.colors.green[9],
      backgroundColor: theme.colors.lime[0],
    },
    '&::before': {
      display: 'none',
      position: 'absolute',
      top: 0,
      right: 0,
      content: "''",
      height: '100%',
      width: '.2rem',
      backgroundColor: theme.colors.green[9],
    },
  },
  active: {
    color: theme.colors.green[9],
    backgroundColor: theme.colors.lime[0],
    '&::before': {
      display: 'block',
    },
  },
  icon: {
    color: 'currentcolor',
    marginRight: theme.spacing.sm,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
}));
