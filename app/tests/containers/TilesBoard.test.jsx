import React from 'react';
import {expect} from 'chai';
import {Provider} from 'react-redux';
import {shallow, mount} from 'enzyme';
import App from 'app/components/App';
import TilesBoard  from 'app/containers/TilesBoard';
import Tile from 'app/components/Tile';
import configureStore from 'app/store/configureStore'; 
// Change name :)
const tilesMock = {
  tiles: [
    {
      flipped: false,
      image: 'assets/img/img.jpg',
      matched: false
    },
    {
      flipped: false,
      image: 'assets/img/img2.jpg',
      matched: false
    }],
  isWaiting: false,
  numberOfTries: 0
};

describe('TilesBoard', ()=>{
  let store;
  let wrapper;

  beforeEach(()=>{
    store = configureStore({memory:{...tilesMock}});
    wrapper = mount(
      <Provider store={store} >
        <TilesBoard />
      </Provider>
    );
  });
  
  it('should exist', () => {
    expect(TilesBoard).to.exist;
  });
  
  it('should render one Tile for each tile item', () => {
    expect(wrapper.find(Tile).length).to.equal(tilesMock.tiles.length);
  });
  
});