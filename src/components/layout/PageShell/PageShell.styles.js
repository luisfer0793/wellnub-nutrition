import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, { headerHeight }) => ({
  header: {
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.xs,
    borderBottom: `.1rem solid ${theme.colors.gray[2]}`,
  },
  container: {
    [theme.fn.largerThan('xs')]: {
      padding: '0 7rem',
    },
  },
  content: {
    paddingTop: theme.spacing.xs,
    paddingBottom: theme.spacing.xs,
    minHeight: `calc(100vh - 90px - ${headerHeight}px)`,
    backgroundColor: '#f3f7f9',
    // backgroundColor: theme.colors.lime[0],
  },
  title: {
    textTransform: 'uppercase',
    color: theme.colors.gray[7],
  },
}));
