import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  footer: {
    backgroundColor: theme.colors.wellnubGreen[8],
    color: theme.colors.gray[0],
  },
  section: {
    paddingTop: '7rem',
    paddingBottom: '7rem',
  },
  title: {
    marginBottom: theme.spacing.xs,
  },
  text: {
    color: theme.colors.gray[5],
  },
  list: {
    listStyle: 'none',
  },
  listItem: {
    '&:not(:last-child)': {
      marginBottom: '.5rem',
    },
  },
}));
