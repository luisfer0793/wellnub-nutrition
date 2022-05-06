import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
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
  },
  header: {
    backgroundImage:
      'linear-gradient(to right, rgba(169, 186, 160, .7), rgba(179, 186, 160, .7)), url("https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bnV0cmljaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '12rem',
  },
  avatar: {
    position: 'absolute',
    top: '8rem',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  main: {
    paddingTop: '5rem',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: '2rem',
  },
  title: {
    color: theme.colors.dark[9],
  },
  footer: {
    backgroundColor: theme.colors.wellnubGreen[8],
    color: theme.colors.gray[1],
    paddingTop: theme.spacing.lg,
    paddingBottom: theme.spacing.lg,
    paddingRight: theme.spacing.sm,
    paddingLeft: theme.spacing.sm,
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
