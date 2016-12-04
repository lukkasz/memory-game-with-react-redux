import {renderComponent,expect} from 'app/tests/test_helper';

import MemoryBoard from 'app/components/MemoryBoard';

describe('MemoryBoard', ()=>{
  it('should exist', () => {
    const component = renderComponent(MemoryBoard);
    //console.log("memory board",component);
    
    expect(component).to.have.class('gameboard');
    //expect(component.find('Tile')).to.exist;
  })
})