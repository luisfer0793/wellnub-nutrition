import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { MantineProvider, Global } from '@mantine/core';

import { store, persistor } from './redux/store';

import { globalStyles } from './styles/global.styles';
import { theme } from './styles/theme.styles';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
            <Global styles={globalStyles} />
            <App />
          </MantineProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
