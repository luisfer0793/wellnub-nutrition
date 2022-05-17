import { showNotification } from '@mantine/notifications';

import { notificationStyler } from 'utils/functions.util';

export const useNotification =
  () =>
  (options = { variant: '' }) => {
    showNotification({
      ...options,
      styles: notificationStyler(options.variant),
    });
  };
