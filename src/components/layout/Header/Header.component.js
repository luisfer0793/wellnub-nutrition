import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Group,
  Indicator,
  Space,
  Text,
  Header as LayoutHeader,
} from '@mantine/core';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

import { useAuthentication } from 'hooks/useAuthentication.hook';
import { useAnalyticsEventTracker } from 'hooks/useAnalyticsEventTracker.hook';

import AvatarDropdown from '../../common/dropdowns/AvatarDropdown/AvatarDropdown.component';

import { ROLES } from 'utils/constants.util';

import { useStyles } from './Header.styles';

const PUBLIC_LINKS = [
  { id: 'public-link-1', to: 'nutriologos', label: 'Nutriólogos' },
  { id: 'public-link-2', to: 'partners', label: 'Partners' },
  { id: 'public-link-3', to: 'dentistas', label: 'Dentistas' },
];

const Header = forwardRef((_, ref) => {
  const { eventTracker } = useAnalyticsEventTracker('Authentication');

  const { isAuthenticated, user } = useAuthentication();

  const {
    classes: { header, flex, logo, spaceBetween, list, listItem, asLink },
    cx,
  } = useStyles();

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

  return (
    <LayoutHeader height={70} ref={ref} className={header}>
      <Container fluid px={70}>
        <div className={flex}>
          <Text className={logo} weight={700} component={Link} to={rootPath}>
            Wellnub
          </Text>
          <div className={spaceBetween}>
            <ul className={cx(flex, list)}>
              {PUBLIC_LINKS.map(link => (
                <li key={link.id} className={listItem}>
                  <Text
                    className={asLink}
                    component={Link}
                    to={link.to}
                    size="sm"
                  >
                    {link.label}
                  </Text>
                </li>
              ))}
            </ul>
            {isAuthenticated && (
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
            )}
            {!isAuthenticated && (
              <div className={flex}>
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
            )}
          </div>
        </div>
      </Container>
    </LayoutHeader>
  );
});

export default Header;
