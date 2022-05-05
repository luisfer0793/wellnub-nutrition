import { Fragment } from 'react';

import { Footer, Navbar } from 'components';

import { AppRoutes } from 'utils/Routes.utlil';
import { useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();
  return (
    <Fragment>
      {pathname !== '/login' && <Navbar />}
      <AppRoutes />
      {pathname !== '/login' && <Footer />}
    </Fragment>
  );
}

export default App;
