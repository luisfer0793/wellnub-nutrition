import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  root: {
    paddingBottom: 0,
  },
  quote: {
    fontSize: '1.5rem',
    color: theme.colors.dark[3],
    textAlign: 'left !important',
  },
  title: {
    marginLeft: '6.2rem',
    fontStyle: 'italic',
    fontSize: '1.4rem',
    color: theme.colors.dark[2],
    textAlign: 'left !important',
  },
  cite: {
    color: theme.colors.wellnubGreen[8],
    fontWeight: 600,
    textAlign: 'left !important',
  },
}));
