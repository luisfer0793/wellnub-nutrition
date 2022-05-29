import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme, { variant }) => {
  const color = {
    INFO: theme.colors.gray,
    WARNING: theme.colors.yellow,
  }[variant];

  return {
    title: {
      fontSize: '1.4rem',
      fontWeight: 600,
      paddingBottom: theme.spacing.xs,
      color: theme.colors.gray[7],
    },
    text: {
      fontSize: '1.4rem',
    },
    footer: {
      paddingTop: theme.spacing.xs,
      paddingBottom: theme.spacing.xs,
      paddingLeft: theme.spacing.xs,
      paddingRight: theme.spacing.xs,
      marginTop: theme.spacing.sm,
    },
    alert: {
      backgroundColor: color[0],
    },
    alertMessage: {
      color: color[7],
      fontSize: '1.4rem',
    },
    flex: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    alertIcon: {
      color: color[5],
    },
  };
});
