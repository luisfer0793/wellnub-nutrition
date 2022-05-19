import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  icon: {
    color: 'currentcolor',
  },
  avatar: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));
