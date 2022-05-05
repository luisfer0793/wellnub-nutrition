import { createStyles } from '@mantine/core';

export const useStyles = createStyles(theme => ({
  hero: {
    backgroundImage:
      'linear-gradient(to right bottom, rgba(221, 246, 195, 20%), rgba(255, 255, 255, 20%)), url("https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3508&q=80")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  section: {
    paddingTop: '10rem',
    paddingBottom: '10rem',
  },
  title: {
    fontSize: '5rem',
    width: '20ch',
  },
  subtitle: {
    fontSize: '3.2rem',
    marginBottom: '4rem',
  },
  black: {
    color: theme.colors.dark[9],
  },
  gray: {
    color: theme.colors.dark[3],
  },
  bgGray: {
    backgroundColor: theme.colors.gray[1],
  },
  center: {
    textAlign: 'center',
  },
  marginBottomLg: {
    marginBottom: theme.spacing.lg,
  },
  heroList: {
    marginLeft: theme.spacing.md,
  },
  heroInfoText: {
    marginTop: theme.spacing.xs,
    color: theme.colors.dark[2],
  },
  heroDescription: {
    maxWidth: '70ch',
  },
  grid: {
    display: 'grid',
    gap: '1rem',
    gridTemplateColumns: 'repeat(3, minmax(40rem, 1fr))',
  },
  gridItem: {
    maxWidth: '35rem',
    justifySelf: 'center',
  },
  gridImage: {
    transition: 'transform linear 100ms',
    '&:hover': {
      transform: 'translateX(.5rem)',
    },
  },
  gridItemTitle: {
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  stepTitle: {
    fontSize: '4.5rem',
    cursor: 'pointer',
    lineHeight: 1,
    marginBottom: theme.spacing.xl,
    color: theme.colors.dark[9],
  },
  stepAnimationWrapper: {
    minHeight: '51.25rem',
  },
  stepNumber: {
    lineHeight: 1,
    color: theme.colors.dark[9],
  },
  stepWrapper: {
    paddingLeft: '5rem',
  },
  stepperWrapper: {
    marginTop: theme.spacing.xl,
    maxWidth: '40%',
  },
  stepperControlsWrapper: {
    marginBottom: theme.spacing.lg,
  },
}));

export const useStepperStyles = createStyles((theme, params, getRef) => ({
  separator: {
    height: 1,
    borderRadius: theme.radius.xl,
    backgroundColor: theme.colors.gray[2],
  },

  separatorActive: {
    borderWidth: 0,
    backgroundColor: theme.colors.wellnubGreen[5],
  },

  stepIcon: {
    ref: getRef('stepIcon'),
    borderColor: 'transparent',
    backgroundColor: theme.colors.gray[2],
    borderWidth: 0,
  },

  step: {
    transition: 'transform 150ms ease',
  },

  stepProgress: {
    transform: 'scale(1.05)',

    [`& .${getRef('stepIcon')}`]: {},
  },

  stepCompleted: {
    [`& .${getRef('stepIcon')}`]: {
      borderWidth: 0,
      backgroundColor: theme.colors.wellnubGreen[5],
    },
  },
}));
