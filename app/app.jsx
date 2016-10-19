import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import Main from 'Main';
import reducers from 'app/reducers/reducers';
import * as configureStore from 'app/store/configureStore'; 

const store = configureStore.configure();

//Load bootstrap css
require('style!css!bootstrap/dist/css/bootstrap.min.css');

//Load Custom App Style
import 'style!css!sass!applicationStyles';

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>
  , document.querySelector('.container'));
