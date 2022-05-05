import ReactGA from 'react-ga';

export const useAnalyticsEventTracker = (category = 'basic category') => {
  const eventTracker = (action = 'basic action', label = 'basic label') => {
    ReactGA.event({
      category,
      action,
      label,
    });
  };

  return {
    eventTracker,
  };
};
