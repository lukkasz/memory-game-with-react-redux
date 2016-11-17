import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from 'app/components/App';
import configureStore from 'app/store/configureStore'; 

const store = configureStore();

//Load bootstrap css
require('style!css!bootstrap/dist/css/bootstrap.min.css');

//Load Custom App Style
import 'style!css!sass!applicationStyles';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.querySelector('.container'));
