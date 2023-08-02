import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import { ThemeProvider } from '@emotion/react'
import { App } from 'components/App';
import {store, persistor} from './redux';
import {theme} from './constants';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </ThemeProvider>
);
