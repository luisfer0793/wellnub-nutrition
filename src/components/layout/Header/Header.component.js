import { forwardRef, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useScrollLock, useToggle } from '@mantine/hooks';
import {
  Button,
  Container,
  Group,
  Indicator,
  Space,
  Text,
  Header as LayoutHeader,
  MediaQuery,
  Burger,
  Stack,
  Divider,
} from '@mantine/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import {
  useAnalyticsEventTracker,
  useAuthentication,
  useNavbarLayout,
} from 'hooks';

import AvatarDropdown from '../../common/dropdowns/Avatar/AvatarDropdown.component';

import { ROLES } from 'utils/constants.util';

import { useStyles } from './Header.styles';

const PUBLIC_LINKS = [
  { id: 'public-link-1', to: 'nutriologos', label: 'Nutriólogos' },
  { id: 'public-link-2', to: 'partners', label: 'Partners' },
  { id: 'public-link-3', to: 'dentistas', label: 'Dentistas' },
];

const Header = forwardRef((_, ref) => {
  const [isOpen, toggleHandler] = useToggle(false, [true, false]);

  const { isVisible, handleToggle } = useNavbarLayout();

  const { eventTracker } = useAnalyticsEventTracker('Authentication');

  const { isAuthenticated, user } = useAuthentication();

  const [, setScrollLocked] = useScrollLock();

  const { classes, cx } = useStyles({ isOpen, isAuthenticated });

  const rootPath = !isAuthenticated
    ? '/'
    : `${
        {
          [ROLES.CLIENT]: '/cliente',
          [ROLES.PARTNER]: '/partner',
          [ROLES.ADMIN]: '/administrador',
          [ROLES.NUTRITIONIST]: '/nutriologo',
        }[user.role]
      }`;

  const onLoginClickHandler = () => {
    eventTracker('LoginClick', 'LoginClick');
  };

  const onToggleHandler = () => {
    toggleHandler();
  };

  useEffect(() => {
    setScrollLocked(isOpen);
  }, [isOpen, setScrollLocked]);

  return (
    <Fragment>
      <LayoutHeader height={70} ref={ref} className={classes.header}>
        <Container fluid className={classes.container}>
          <div className={classes.flex}>
            {isAuthenticated && (
              <>
                <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
                  <Text
                    to={rootPath}
                    weight={700}
                    component={Link}
                    className={classes.logo}
                  >
                    Wellnub
                  </Text>
                </MediaQuery>
                <MediaQuery largerThan="xs" styles={{ display: 'none' }}>
                  <Burger
                    opened={isVisible}
                    onClick={handleToggle}
                    sx={{ marginRight: 'auto' }}
                  />
                </MediaQuery>
                <Group spacing="lg">
                  <Indicator
                    inline
                    size={12}
                    position="bottom-end"
                    color="red"
                    withBorder
                  >
                    <FontAwesomeIcon icon={faBell} />
                  </Indicator>
                  <AvatarDropdown />
                </Group>
              </>
            )}
            {!isAuthenticated && (
              <>
                <Text
                  to={rootPath}
                  weight={700}
                  component={Link}
                  className={classes.logo}
                >
                  Wellnub
                </Text>
                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                  <Burger
                    opened={isOpen}
                    onClick={onToggleHandler}
                    sx={{ marginLeft: 'auto' }}
                  />
                </MediaQuery>
                <MediaQuery smallerThan="xs" styles={{ display: 'none' }}>
                  <div className={classes.spaceBetween}>
                    <ul className={cx(classes.flex, classes.list)}>
                      {PUBLIC_LINKS.map(link => (
                        <li key={link.id} className={classes.listItem}>
                          <Text
                            className={classes.asLink}
                            component={Link}
                            to={link.to}
                            size="sm"
                          >
                            {link.label}
                          </Text>
                        </li>
                      ))}
                    </ul>
                    <div className={classes.flex}>
                      <Button
                        component={Link}
                        to="login"
                        color="green"
                        onClick={onLoginClickHandler}
                      >
                        Iniciar sesión
                      </Button>
                      <Space w="sm" />
                      <Button variant="subtle" color="green">
                        Registrarse
                      </Button>
                    </div>
                  </div>
                </MediaQuery>
              </>
            )}
          </div>
        </Container>
      </LayoutHeader>

      {/* ---- RESPONSIVE MENU ---- */}
      <MediaQuery largerThan="xs" styles={{ display: 'none' }}>
        <aside className={classes.sidebar}>
          <nav>
            <ul className={classes.list}>
              <li className={classes.sidebarItem}>
                <Text
                  className={classes.asLink}
                  component={Link}
                  to="nutriologos"
                  size="sm"
                  onClick={onToggleHandler}
                >
                  Nutriologos
                </Text>
              </li>
              <li className={classes.sidebarItem}>
                <Text
                  className={classes.asLink}
                  component={Link}
                  to="dentistas"
                  size="sm"
                  onClick={onToggleHandler}
                >
                  Dentistas
                </Text>
              </li>
              <li className={classes.sidebarItem}>
                <Text
                  className={classes.asLink}
                  component={Link}
                  to="partners"
                  size="sm"
                  onClick={onToggleHandler}
                >
                  Partners
                </Text>
              </li>
              <li className={classes.sidebarItem}>
                <Text
                  className={classes.asLink}
                  component={Link}
                  to="clientes"
                  size="sm"
                  onClick={onToggleHandler}
                >
                  Clientes
                </Text>
              </li>
            </ul>
          </nav>
          <footer>
            <Stack>
              <Button fullWidth color="green" component={Link} to="/login">
                Iniciar sesión
              </Button>
              <Button
                fullWidth
                color="green"
                variant="outline"
                component={Link}
                to="/registrarse"
              >
                Registrarse
              </Button>
            </Stack>
            <br />
            <Divider />
            <br />
            <Text component="p" className={classes.copyright}>
              &copy; 2022. All rights reserved
            </Text>
          </footer>
        </aside>
      </MediaQuery>
    </Fragment>
  );
});

export default Header;
