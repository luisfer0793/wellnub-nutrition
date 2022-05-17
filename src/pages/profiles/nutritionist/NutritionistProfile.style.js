import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, { banner }) => ({
  grid: {
    display: 'grid',
    gridTemplateAreas: `
      "header header header"
      "numbers panel panel"
      "about about about"
      "social social social"
    `,
    gap: theme.spacing.md,
  },
  papper: {
    overflow: 'hidden',
  },
  header: {
    gridArea: 'header',
    backgroundImage: `linear-gradient(to right, rgba(0, 82, 73, .8), rgba(0, 82, 73, .8)), url("${banner}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: theme.colors.gray[0],
    padding: '3rem',
  },
  headerTitleWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  avatarWrapper: {
    backgroundColor: theme.colors.gray[0],
    borderRadius: '50%',
    padding: '.1rem',
  },
  headerNamesWrapper: {
    paddingLeft: theme.spacing.xl,
  },
  headerTitle: {
    fontWeight: 700,
    fontSize: '2.6rem',
  },
  headerSubtitle: {
    fontWeight: 400,
    fontSize: '1.8rem',
    color: theme.colors.wellnubGreen[2],
  },
  numbers: {
    gridArea: 'numbers',
  },
  about: {
    gridArea: 'about',
  },
  social: {
    gridArea: 'social',
  },
  panel: {
    gridArea: 'panel',
  },
}));
