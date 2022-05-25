import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, { isVisible }) => ({
  navbar: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    top: 0,
    left: 0,
    width: '30rem',
    height: '100vh',
    zIndex: 250,
    borderRight: `.1rem solid ${theme.colors.gray[2]}`,
    backgroundColor: 'white',
    transition: 'transform linear 250ms 150ms',
    [theme.fn.smallerThan('xs')]: {
      width: '80%',
      transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
    },
  },
  section: {
    margin: theme.spacing.md,
  },
  grow: {
    flexGrow: 1,
  },
  bordered: {
    borderTop: `.1rem solid ${theme.colors.gray[2]}`,
  },
  linksWrapper: {
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
  },
  sectionTitle: {
    paddingLeft: theme.spacing.lg,
    [theme.fn.smallerThan('xs')]: {
      fontSize: '1.5rem',
      paddingLeft: 0,
    },
    '&:not(:first-of-type)': {
      marginTop: theme.spacing.lg,
    },
  },
}));
