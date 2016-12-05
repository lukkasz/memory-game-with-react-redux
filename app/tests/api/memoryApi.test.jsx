import {expect} from 'chai';

import memoryAPI from 'app/api/memoryAPI';

describe('memoryAPI', ()=>{

  
  describe('getTiles()', () => {
    
    it('should return array', () => {
      expect(memoryAPI.getTiles()).to.be.instanceof(Array);
    });
    
    it('should return array of 16 elements', () => {
      expect(memoryAPI.getTiles().length).to.equal(16);
    });
    
  });

})