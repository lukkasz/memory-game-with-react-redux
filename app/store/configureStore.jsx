import { 
	combineReducers, 
	createStore, 
	compose 
} from 'redux';

export default function configure(initailState = {}) {

  const reducer = combineReducers({
    state: (state = {}) => state
  });
  
  // create store and add support for react dev tools in Chrome
  const store = createStore(reducer, initailState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  
  return store;
  
}
