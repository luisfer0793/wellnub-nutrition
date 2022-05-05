import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  grid: {
    display: 'grid',
    gap: '5rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(40rem, 1fr))',
  },
  title: {
    marginBottom: theme.spacing.xl,
    color: theme.colors.dark[9],
  },
}));
