import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  grid: {
    display: 'grid',
    gap: '4rem',
    gridTemplateColumns: 'repeat(auto-fit, minmax(25rem, 1fr))',
  },
  title: {
    marginBottom: theme.spacing.xl,
  },
}));
