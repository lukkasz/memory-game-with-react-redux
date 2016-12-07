import React from 'react';
import {expect} from 'chai';
import {Provider} from 'react-redux';
import {shallow, mount} from 'enzyme';
var sinon = require('sinon');
import App from 'app/components/App';
import TilesBoard from 'app/containers/TilesBoard';
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
  
  it('should call flipTile action dispatcher when Tile is clicked', () => {
    let tile = wrapper.find(Tile).first();
    tile.simulate('click');
    expect(tile.props().tile.flipped).to.be.true;
  });
  
   it('should not call toggleIsWaiting action dispatcher when Tile is clicked', () => {
    let tile = wrapper.find(Tile).first();
    tile.simulate('click');
    expect(wrapper.props().store.getState().memory.isWaiting).to.be.false;
  });
  
  it('should call toggleIsWaiting action dispatcher if two Tiles is clicked', () => {
    wrapper.find(Tile).at(0).simulate('click');
    wrapper.find(Tile).at(1).simulate('click');
    expect(wrapper.props().store.getState().memory.isWaiting).to.be.true;
  });
  
  it('should not call incrementTries action dispatcher when Tile is clicked', () => {
    let numOftries = wrapper.props().store.getState().memory.numberOfTries;
    wrapper.find(Tile).at(0).simulate('click');
    expect(wrapper.props().store.getState().memory.numberOfTries).to.be.equal(numOftries);
  });
  
  it('should call incrementTries action dispatcher if two Tiles is clicked', () => {
    let numOftries = wrapper.props().store.getState().memory.numberOfTries;
    wrapper.find(Tile).at(0).simulate('click');
    wrapper.find(Tile).at(1).simulate('click');
    expect(wrapper.props().store.getState().memory.numberOfTries).to.be.equal(numOftries+1);
  });
  
  // Need Help !!!!!
  // it('should call handleClickTile when Tile is clicked', ()=>{
  //   console.log(wrapper);
  // })
  
});