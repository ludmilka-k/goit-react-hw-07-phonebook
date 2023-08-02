import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import { ThemeProvider } from '@emotion/react'
import { App } from 'components/App';
import {store} from './redux';
import {theme} from './constants';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
