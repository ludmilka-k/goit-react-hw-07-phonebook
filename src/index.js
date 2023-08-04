import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import { ThemeProvider } from '@emotion/react'
import { App } from 'components/App';
import {store} from './redux';
import {theme} from './constants';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ThemeProvider>
);
