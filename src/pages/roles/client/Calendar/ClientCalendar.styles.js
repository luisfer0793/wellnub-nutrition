import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  title: {
    marginBottom: theme.spacing.md,
    color: theme.colors.dark[9],
  },
  actionSection: {
    textAlign: 'right',
    marginBottom: theme.spacing.md,
  },
}));
