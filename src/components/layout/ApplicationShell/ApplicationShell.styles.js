import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, { navWidth }) => ({
  content: {
    position: 'relative',
    top: 0,
    left: navWidth,
    width: `calc(100% - ${navWidth}px)`,
    [theme.fn.smallerThan('xs')]: {
      top: 0,
      left: 0,
      width: '100%',
    },
  },
  overlay: {
    height: '100vh',
  },
}));
