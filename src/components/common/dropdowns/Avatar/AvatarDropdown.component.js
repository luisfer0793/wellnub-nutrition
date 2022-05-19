import { Link } from 'react-router-dom';
import { Avatar, Divider, Menu, Text } from '@mantine/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBriefcase,
  faBookOpenReader,
  faGears,
  faArrowRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import { useAuthentication } from 'hooks';

import { ROLES } from 'utils/constants.util';

import { useStyles } from './AvatarDropdown.styles';

const AvatarDropdown = () => {
  const { user, handleLogout } = useAuthentication();

  const {
    classes: { icon, avatar },
  } = useStyles();

  const onLogoutClickHandler = () => {
    handleLogout();
  };

  return (
    <Menu
      withArrow
      control={
        <Avatar
          color="green"
          radius="xl"
          size="md"
          src={user.image}
          className={avatar}
        >
          LF
        </Avatar>
      }
      placement="end"
      shadow="lg"
    >
      <Menu.Label>Aplicación</Menu.Label>
      <Menu.Item
        component={Link}
        to="dashboard"
        icon={<FontAwesomeIcon icon={faBriefcase} size="sm" className={icon} />}
      >
        Dashboard
      </Menu.Item>
      <Menu.Item
        component={Link}
        to="tutoriales"
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
      <Divider />
      <Menu.Item disabled>
        <Text size="sm" weight={600}>
          Perfil de:{' '}
          {
            {
              [ROLES.ADMIN]: 'Admin',
              [ROLES.CLIENT]: 'Cliente',
              [ROLES.PARTNER]: 'Partner',
              [ROLES.NUTRITIONIST]: 'Nutriólogo',
            }[user.role]
          }
        </Text>
      </Menu.Item>
    </Menu>
  );
};

export default AvatarDropdown;
