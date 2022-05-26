import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  card: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing.sm,
    color: theme.colors.gray[0],
    borderRadius: theme.radius.xs,
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
    color: theme.colors.wellnubGreen[1],
    [theme.fn.smallerThan('xs')]: {
      fontSize: '1.3rem !important',
    },
  },
  infoWrapper: {
    paddingLeft: theme.spacing.md,
  },
  avatarWrapper: {
    backgroundColor: theme.colors.gray[0],
    padding: '.1rem',
    borderRadius: theme.radius.sm,
  },
}));
