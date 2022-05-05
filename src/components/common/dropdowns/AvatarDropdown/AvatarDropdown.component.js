import { Avatar, Divider, Menu } from '@mantine/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faBookOpenReader,
  faGears,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import { useAuthentication } from 'hooks/useAuthentication.hook';

import { useStyles } from './AvatarDropdown.styles';

const AvatarDropdown = () => {
  const { setAuthentication } = useAuthentication();

  const {
    classes: { icon },
  } = useStyles();

  const onLogoutClickHandler = () => {
    setAuthentication(false);
  };

  return (
    <Menu
      withArrow
      control={
        <Avatar color="green" radius="xl">
          LF
        </Avatar>
      }
      placement="end"
    >
      <Menu.Label>Aplicación</Menu.Label>
      <Menu.Item
        icon={<FontAwesomeIcon icon={faBriefcase} size="sm" className={icon} />}
      >
        Dashboard
      </Menu.Item>
      <Menu.Item
        icon={
          <FontAwesomeIcon icon={faBookOpenReader} size="sm" className={icon} />
        }
      >
        Tutoriales
      </Menu.Item>
      <Divider />
      <Menu.Label>Cuenta</Menu.Label>
      <Menu.Item
        icon={<FontAwesomeIcon icon={faGears} size="sm" className={icon} />}
      >
        Configuración
      </Menu.Item>
      <Menu.Item
        color="red"
        icon={
          <FontAwesomeIcon
            icon={faArrowRightFromBracket}
            size="sm"
            className={icon}
          />
        }
        onClick={onLogoutClickHandler}
      >
        Cerrar sesión
      </Menu.Item>
    </Menu>
  );
};

export default AvatarDropdown;
