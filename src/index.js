import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClientProvider, QueryClient } from 'react-query';

import { MantineProvider, Global } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';

import { modals } from 'components/modals';

import { store, persistor } from './redux/store';

import { globalStyles } from './styles/global.styles';
import { overrides } from './styles/overrides.styles';
import { theme } from './styles/theme.styles';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MantineProvider
            withGlobalStyles
            withNormalizeCSS
            theme={theme}
            styles={overrides}
          >
            <ModalsProvider modals={modals}>
              <NotificationsProvider autoClose={6000}>
                <Global styles={globalStyles} />
                <App />
              </NotificationsProvider>
            </ModalsProvider>
          </MantineProvider>
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </BrowserRouter>,
);
