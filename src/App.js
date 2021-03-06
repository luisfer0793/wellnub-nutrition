import { useEffect } from 'react';
import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

import { useElementSize, useScrollIntoView } from '@mantine/hooks';

import { Footer, Header, RootRoutes } from 'components';

import { useAuthentication } from 'hooks';

import { useStyles } from './App.styles';

function App() {
  const { isAuthenticated } = useAuthentication();

  const { scrollIntoView, targetRef } = useScrollIntoView();

  const location = useLocation();

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
    scrollIntoView();
  }, [location, scrollIntoView]);

  return (
    <div ref={targetRef}>
      {location.pathname !== '/login' && !isAuthenticated && (
        <Header ref={headerRef} />
      )}
      <main className={main}>
        <RootRoutes />
      </main>
      {location.pathname !== '/login' && !isAuthenticated && (
        <Footer ref={footerRef} />
      )}
    </div>
  );
}

export default App;
