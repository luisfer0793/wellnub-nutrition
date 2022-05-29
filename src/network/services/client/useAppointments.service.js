import { useQuery } from 'react-query';
import { QUERY_KEYS } from 'utils/constants.util';
import { useWellnubAPI } from 'hooks';

export const useAppointmentsQuery = () => {
  const wellnub = useWellnubAPI();

  return async () => {
    const { data } = await wellnub.get(
      `/v1/client/inbodyPass?statusList=scheduled`,
    );
    return data;
  };
};

const useAppointmentsService = () => {
  const query = useAppointmentsQuery();

  return useQuery(QUERY_KEYS.CLIENT.GET_APPOINTMENTS, query);
};

export default useAppointmentsService;
