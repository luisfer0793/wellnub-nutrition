import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, { banner }) => ({
  card: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr',
    textAlign: 'center',
    color: theme.colors.dark[3],
    borderRadius: theme.radius.xs,
    boxShadow:
      'rgba(0, 0, 0, 0.1) 0px 1px 3px, rgba(0, 0, 0, 0.1) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px',
    overflow: 'hidden',
    backgroundColor: theme.colors.gray[0],
    [theme.fn.smallerThan('xs')]: {
      gridTemplateColumns: '1fr',
    },
  },
  header: {
    backgroundImage: `linear-gradient(to right, rgba(0, 82, 73, .7), rgba(0, 82, 73, .7)), url("${banner}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '9rem',
  },
  avatar: {
    position: 'absolute',
    top: '6rem',
    left: '50%',
    width: '6.5rem',
    height: '6.5rem',
    minWidth: '6.5rem',
    transform: 'translateX(-50%)',
  },
  main: {
    paddingTop: '5rem',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: '2rem',
  },
  footer: {
    backgroundColor: theme.colors.wellnubGreen[8],
    color: theme.colors.gray[1],
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
    paddingRight: theme.spacing.sm,
    paddingLeft: theme.spacing.sm,
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },
  footerTitle: {
    marginBottom: theme.spacing.md,
    fontWeight: 700,
  },
  badge: {
    fontWeight: 400,
    textTransform: 'initial',
    borderColor: 'currentcolor',
    color: theme.colors.gray[5],
  },
  buttonWrapper: {
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
  buttonSection: {
    backgroundColor: theme.colors.gray[2],
  },
  infoWrapper: {
    position: 'relative',
  },
}));
