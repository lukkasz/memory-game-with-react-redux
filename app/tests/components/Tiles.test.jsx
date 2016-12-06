import React from 'react';
import {shallow, mount} from 'enzyme';
var sinon = require('sinon');
import {expect} from 'chai';
import Tile from 'app/components/Tile';


describe('Tile', () => {
  it('should exist', () => {
    expect(Tile).to.exist;
  });
  
  it('calls onClick with right argument when clicked', () => {
    const spy = sinon.spy();
    const index = 0;
    const tileItem = {
      flipped: false,
      image: 'assets/img/img.jpg',
      matched: false
    };
    
    const wrapper = shallow(<Tile index={index} tile={tileItem} onClickTile={spy} />);
    wrapper.find('.tile').simulate('click');
    expect(spy.calledOnce).to.be.true;
    expect(spy.calledWith(tileItem, index)).to.be.true;
    
  })
})