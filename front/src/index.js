import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import theme from './theme';
import {applyMiddleware, createStore} from "redux";
import { Provider } from 'react-redux';

import rootReducer from './reduscers/reducers_axios';
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
      <Provider store={store}>
            <App />
      </Provider>
  </ThemeProvider>,
  document.querySelector('#root'),
);
