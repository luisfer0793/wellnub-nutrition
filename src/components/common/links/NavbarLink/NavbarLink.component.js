import { NavLink } from 'react-router-dom';
import { Text } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { useNavbarLayout } from 'hooks';
import { useStyles } from './NavbarLink.styles';

const NavbarLink = ({ link }) => {
  const { isResponsive, isVisible, handleClose } = useNavbarLayout();

  const {
    classes: { menuItem, active, icon, wrapper },
    cx,
  } = useStyles();

  const onClickHandler = () => {
    if (isResponsive && isVisible) {
      handleClose();
    }
  };

  return (
    <NavLink
      to={link.to}
      onClick={onClickHandler}
      className={({ isActive }) => cx(menuItem, isActive && active)}
    >
      <span className={wrapper}>
        <FontAwesomeIcon icon={icons[link.icon]} className={icon} />
        <Text size="sm" component="p" style={{ fontSize: 'inherit' }}>
          {link.label}
        </Text>
      </span>
    </NavLink>
  );
};

export default NavbarLink;
