import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  navbar: {
    backgroundColor: theme.colors.gray[0],
    color: theme.colors.gray[9],
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
  logo: {
    textTransform: 'uppercase',
    marginRight: theme.spacing.xl,
  },
  list: {
    listStyle: 'none',
  },
  listItem: {
    marginRight: theme.spacing.md,
  },
  asLink: {
    display: 'block',
    fontWeight: 500,
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  spaceBetween: {
    display: 'flex',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));
