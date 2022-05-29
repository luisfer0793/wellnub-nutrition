import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  navbar: {
    position: 'fixed',
    display: 'flex',
    flexDirection: 'column',
    top: 0,
    left: 0,
    width: '27rem',
    height: '100vh',
    zIndex: 250,
    backgroundColor: theme.colors.wellnubGreen[8],
    transition: 'transform linear 150ms 150ms',
  },
  section: {
    margin: theme.spacing.md,
  },
  divider: {
    borderTopColor: theme.colors.wellnubGreen[6],
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
    paddingLeft: theme.spacing.xs,
    color: theme.colors.gray[0],
    [theme.fn.smallerThan('xs')]: {
      fontSize: '1.5rem',
      paddingLeft: 0,
    },
    '&:not(:first-of-type)': {
      marginTop: theme.spacing.lg,
    },
  },
}));
