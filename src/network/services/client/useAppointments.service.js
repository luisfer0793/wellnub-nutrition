import { useQuery } from 'react-query';
import { useWellnubAPI } from 'hooks';

const useAppointmentsService = () => {
  const wellnub = useWellnubAPI();

  const request = async () => {
    const { data } = await wellnub.get(
      `/v1/client/inbodyPass?statusList=scheduled`,
    );
    return data;
  };

  return useQuery('GET_APPOINTMENTS', request, {
    onSuccess: data => {},
    onError: error => {},
  });
};

export default useAppointmentsService;
