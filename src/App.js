import { Fragment, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

import { useElementSize } from '@mantine/hooks';

import { Footer, Navbar } from 'components';

import { AppRoutes } from 'utils/Routes.utlil';

import { useStyles } from './App.styles';

function App() {
  const location = useLocation();

  const { ref: navbarRef, height: navbarHeight } = useElementSize();
  const { ref: footerRef, height: footerHeight } = useElementSize();

  const {
    classes: { main },
  } = useStyles({ navbarHeight, footerHeight });

  const analyticsInitializer = () => {
    ReactGA.initialize('G-SRNY6CHN36');
    ReactGA.send({
      hitType: 'pageview',
      page: location.pathname + location.search,
    });
  };

  useEffect(() => {
    analyticsInitializer();
  }, [location]);

  return (
    <Fragment>
      {location.pathname !== '/login' && <Navbar ref={navbarRef} />}
      <main className={main}>
        <AppRoutes />
      </main>
      {location.pathname !== '/login' && <Footer ref={footerRef} />}
    </Fragment>
  );
}

export default App;
