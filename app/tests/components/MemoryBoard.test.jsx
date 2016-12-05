import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import {shallowWithStore} from 'app/tests/enzyme_helper';

import {MemoryBoard} from 'app/components/MemoryBoard';

const memory = {
  tiles: [{id:1, name:'Luka'}]
}

describe('MemoryBoard', ()=>{
  it('should exist', () => {
    const component = mount(<MemoryBoard tiles={[...memory.tiles]} />);
    console.log("MemoryBoard", component.find(<MemoryBoard />));
    //expect(component.find(<MemoryBoard />)).to.have.lengthOf(1);
  })
})