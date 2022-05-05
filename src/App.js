import { Fragment, useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

import { useElementSize } from '@mantine/hooks';

import { Footer, Navbar } from 'components';

import { AppRoutes } from 'utils/Routes.utlil';

import { useStyles } from './App.styles';

function App() {
  const { pathname } = useLocation();

  const { ref: navbarRef, height: navbarHeight } = useElementSize();
  const { ref: footerRef, height: footerHeight } = useElementSize();

  const {
    classes: { main },
  } = useStyles({ navbarHeight, footerHeight });

  const analyticsInitializer = () => {
    ReactGA.initialize('314177706');
    ReactGA.send(window.location.pathname + window.location.search);
  };

  useEffect(() => {
    analyticsInitializer();
  }, []);

  return (
    <Fragment>
      {pathname !== '/login' && <Navbar ref={navbarRef} />}
      <main className={main}>
        <AppRoutes />
      </main>
      {pathname !== '/login' && <Footer ref={footerRef} />}
    </Fragment>
  );
}

export default App;
