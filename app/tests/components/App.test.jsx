import React from 'react';
import {Provider} from 'react-redux';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';

import configureStore from 'app/store/configureStore'; 
import App from 'app/components/App';
import TilesBoard from 'app/containers/TilesBoard';
import Nav from 'app/containers/Nav';
 



describe('App', ()=>{
  let store;
  let wrapper;
  
  beforeEach(()=>{
    store = configureStore();
    wrapper = mount(
      <Provider store={store} >
        <App />
      </Provider>
    );
  });
  
  it('should exist', () => {
    const component = shallow(<App />);
    expect(App).to.exist;
  });
  
  it('should render Nav', () => {
    expect(wrapper.find(Nav)).to.exist;
  });
  
  it('should render TilesBoard', () => {
    expect(wrapper.find(TilesBoard)).to.exist;
  })
  

})