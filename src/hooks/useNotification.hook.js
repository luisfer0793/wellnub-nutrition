import { showNotification } from '@mantine/notifications';

import { notificationStyler } from 'utils/functions.util';

const useNotification =
  () =>
  (options = { variant: '' }) => {
    showNotification({
      ...options,
      styles: notificationStyler(options.variant),
    });
  };

export default useNotification;
