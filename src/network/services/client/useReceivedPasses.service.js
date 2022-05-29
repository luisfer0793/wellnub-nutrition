import { useQuery } from 'react-query';
import { QUERY_KEYS } from 'utils/constants.util';
import { useWellnubAPI } from 'hooks';

export const useReceivedPassesQuery = () => {
  const wellnub = useWellnubAPI();

  return async () => {
    const { data } = await wellnub.get('/v1/client/inbodyPass/available');
    return data;
  };
};

const useReceivedPassesService = () => {
  const query = useReceivedPassesQuery();

  return useQuery(QUERY_KEYS.CLIENT.GET_RECEIVED_PASSES, query);
};

export default useReceivedPassesService;
