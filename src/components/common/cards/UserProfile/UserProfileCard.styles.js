import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.md,
    color: theme.colors.gray[0],
    borderRadius: theme.radius.xs,
    backgroundColor: theme.colors.wellnubGreen[5],
    [theme.fn.smallerThan('xs')]: {
      padding: theme.spacing.xs,
    },
  },
  name: {
    color: 'currentcolor',
    [theme.fn.smallerThan('xs')]: {
      fontSize: '1.5rem',
    },
  },
  description: {
    fontSize: '1.4rem !important',
    fontWeight: 500,
    color: theme.colors.wellnubGreen[2],
    [theme.fn.smallerThan('xs')]: {
      fontSize: '1.3rem !important',
    },
  },
  infoWrapper: {
    paddingLeft: theme.spacing.md,
  },
}));
