import { useWellnubAPI } from 'hooks';
import { useQuery } from 'react-query';

const usePassesService = () => {
  const wellnub = useWellnubAPI();

  const request = async () => {
    const { data } = await wellnub.get(
      '/v1/client/inbodyPass/total?statusList=readyForSchedule',
    );
    return data;
  };

  return useQuery('GET_PASSES', request, {
    onSuccess: data => {
      console.log('Data de passes: ', data);
    },
    onError: error => {
      console.dir(error);
    },
  });
};

export default usePassesService;
