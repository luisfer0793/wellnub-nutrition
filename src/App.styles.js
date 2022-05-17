import { createStyles } from '@mantine/core';

export const useStyles = createStyles(
  (theme, { navbarHeight, footerHeight }) => ({
    main: {
      minHeight: `calc(100vh - ${navbarHeight ?? 70}px - ${footerHeight}px)`,
      // [`@media (max-width: 900px)`]: {
      //   marginTop: `calc(${navbarHeight}px + 32px) `,
      // },
    },
  }),
);
