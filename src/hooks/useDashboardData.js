import { useQueries } from 'react-query';

import { useAppointmentsQuery } from 'network/services/client/useAppointments.service';
import { useReceivedPassesQuery } from 'network/services/client/useReceivedPasses.service';

import { QUERY_KEYS } from 'utils/constants.util';

const useDashboardData = () => {
  const appointmentsQuery = useAppointmentsQuery();
  const receivedPassesQuery = useReceivedPassesQuery();

  const results = useQueries([
    {
      queryKey: QUERY_KEYS.CLIENT.GET_APPOINTMENTS,
      queryFn: appointmentsQuery,
    },
    {
      queryKey: QUERY_KEYS.CLIENT.GET_RECEIVED_PASSES,
      queryFn: receivedPassesQuery,
    },
  ]);

  const isLoading = results.map(result => result.isLoading).some(Boolean);

  const isError = results.map(result => result.isError).some(Boolean);

  const data = {
    appointments: results[0].data,
    receivedPasses: results[1].data,
  };

  return {
    data,
    isLoading,
    isError,
  };
};

export default useDashboardData;
