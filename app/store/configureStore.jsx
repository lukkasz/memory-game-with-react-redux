import * as redux from 'redux';

export const configure = (initailState = {}) => {
  const reducer = redux.combineReducers({
    state: (state = {}) => state
  });
  
  
  // create store and add support for react dev tools in Chrome
  const store = redux.createStore(reducer, initailState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
  
  return store;
  
}
