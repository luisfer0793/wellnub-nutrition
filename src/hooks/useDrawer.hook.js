import { useDispatch, useSelector } from 'react-redux';

import { setDrawerVisibility } from 'redux/slices/drawers/drawers.slice';
import { drawerSelector } from 'redux/slices/drawers/drawers.selector';
import { authenticationUserSelector } from 'redux/slices/authentication/authentication.selector';

const useDrawer = name => {
  const { role } = useSelector(authenticationUserSelector);

  const { isVisible } = useSelector(state => drawerSelector(state, name, role));

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(
      setDrawerVisibility({
        name,
        role,
        isVisible: false,
      }),
    );
  };

  const handleOpen = () => {
    dispatch(
      setDrawerVisibility({
        name,
        role,
        isVisible: true,
      }),
    );
  };

  return {
    isVisible,
    handleOpen,
    handleClose,
  };
};

export default useDrawer;
