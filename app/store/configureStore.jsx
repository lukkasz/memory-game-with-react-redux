import {  
	createStore, 
	compose 
} from 'redux';

import rootReducer from 'app/reducers';

export default function configure(initailState = {}) {
  
  // create store and add support for react dev tools in Chrome
  const store = createStore(rootReducer, initailState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  
  return store;
  
}
