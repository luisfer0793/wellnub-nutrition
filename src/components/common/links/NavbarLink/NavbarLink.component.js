import { NavLink } from 'react-router-dom';
import { Text } from '@mantine/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as icons from '@fortawesome/free-solid-svg-icons';
import { useStyles } from './NavbarLink.styles';

const NavbarLink = ({ link, onClick }) => {
  const {
    classes: { menuItem, active, icon, wrapper },
    cx,
  } = useStyles();

  return (
    <NavLink
      onClick={onClick}
      className={({ isActive }) => cx(menuItem, isActive && active)}
      to={link.to}
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
