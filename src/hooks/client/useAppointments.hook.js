import { useDispatch, useSelector } from 'react-redux';
import { appointmentsActiveSelector } from 'redux/slices/appointments/appointments.selector';
import { setActiveAppointment } from 'redux/slices/appointments/appointments.slice';

const useAppointments = () => {
  const active = useSelector(appointmentsActiveSelector);

  const dispatch = useDispatch();

  const handleSetActive = appointment => {
    dispatch(setActiveAppointment(appointment));
  };

  return {
    active,
    handleSetActive,
  };
};

export default useAppointments;
