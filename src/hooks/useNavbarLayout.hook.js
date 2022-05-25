import { useDispatch, useSelector } from 'react-redux';
import { navbarVisibilitySelector } from 'redux/slices/layout/layout.selector';
import { setNavbarVisibility } from 'redux/slices/layout/layout.slice';

const useNavbarLayout = () => {
  const isVisible = useSelector(navbarVisibilitySelector);

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(setNavbarVisibility(!isVisible));
  };

  const handleOpen = () => {
    dispatch(setNavbarVisibility(true));
  };

  const handleClose = () => {
    dispatch(setNavbarVisibility(false));
  };

  return {
    isVisible,
    handleToggle,
    handleClose,
    handleOpen,
  };
};

export default useNavbarLayout;
