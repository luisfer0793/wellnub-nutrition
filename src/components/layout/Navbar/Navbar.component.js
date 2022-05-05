import { Link } from 'react-router-dom';
import { Button, Container, Space, Text } from '@mantine/core';

import { useAuthentication } from 'hooks/useAuthentication.hook';

import AvatarDropdown from '../../common/dropdowns/AvatarDropdown/AvatarDropdown.component';

import { useStyles } from './Navbar.styles';

const Navbar = () => {
  const { isAuthenticated } = useAuthentication();

  const {
    classes: { navbar, flex, logo, spaceBetween, list, listItem, asLink },
    cx,
  } = useStyles();

  return (
    <nav className={navbar}>
      <Container fluid px={70}>
        <div className={flex}>
          <Text className={logo} weight={700} component={Link} to="/">
            Wellnub
          </Text>
          <div className={spaceBetween}>
            <ul className={cx(flex, list)}>
              <li className={listItem}>
                <Text
                  className={asLink}
                  component={Link}
                  to="/nutriologos"
                  size="sm"
                >
                  Nutriólogos
                </Text>
              </li>
              <li className={listItem}>
                <Text className={asLink} component={Link} to="/admin" size="sm">
                  Administradores
                </Text>
              </li>
              <li className={listItem}>
                <Text
                  className={asLink}
                  component={Link}
                  to="/nutriologos"
                  size="sm"
                >
                  Dentistas
                </Text>
              </li>
              <li className={listItem}>
                <Text
                  className={asLink}
                  component={Link}
                  to="/nutriologos"
                  size="sm"
                >
                  Psicologos
                </Text>
              </li>
            </ul>
            {isAuthenticated && (
              <ul className={cx(flex, list)}>
                <AvatarDropdown />
              </ul>
            )}
            {!isAuthenticated && (
              <div className={flex}>
                <Button component={Link} to="login" color="green">
                  Iniciar sesión
                </Button>
                <Space w="sm" />
                <Button variant="subtle" color="green">
                  Registrarse
                </Button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
