import { Fragment, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation, useNavigate } from 'react-router-dom';

import { useElementSize } from '@mantine/hooks';

import { Footer, Header, RootRoutes } from 'components';

import { useAuthentication } from 'hooks/useAuthentication.hook';
import { ROLES } from 'utils/constants.util';

import { useStyles } from './App.styles';

function App() {
  const { isAuthenticated, user } = useAuthentication();

  const location = useLocation();

  const navigate = useNavigate();

  const { ref: headerRef, height: headerHeight } = useElementSize();
  const { ref: footerRef, height: footerHeight } = useElementSize();

  const {
    classes: { main },
  } = useStyles({ headerHeight, footerHeight });

  useEffect(() => {
    ReactGA.initialize('G-SRNY6CHN36');
  }, []);

  useEffect(() => {
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    });
  }, [location]);

  useEffect(() => {
    switch (user.role) {
      case ROLES.CLIENT:
        navigate('/cliente', { replace: true });
        break;
      case ROLES.PARTNER:
        navigate('/partner', { replace: true });
        break;
      case ROLES.NUTRITIONIST:
        navigate('/nutriologo', { replace: true });
        break;
      case ROLES.ADMIN:
        navigate('/administrador', { replace: true });
        break;
      default:
        return;
    }
  }, [user]);

  return (
    <Fragment>
      {location.pathname !== '/login' && !isAuthenticated && (
        <Header ref={headerRef} />
      )}
      <main className={main}>
        <RootRoutes />
      </main>
      {location.pathname !== '/login' && !isAuthenticated && (
        <Footer ref={footerRef} />
      )}
    </Fragment>
  );
}

export default App;
