import { useDispatch, useSelector } from 'react-redux';
import { navbarVisibilitySelector } from 'redux/slices/layout/layout.selector';
import { setNavbarVisibility } from 'redux/slices/layout/layout.slice';
import { useMediaQuery } from '@mantine/hooks';

const useNavbarLayout = () => {
  const isResponsive = useMediaQuery('(max-width: 578px)');

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
    isResponsive,
    isVisible,
    handleToggle,
    handleClose,
    handleOpen,
  };
};

export default useNavbarLayout;
