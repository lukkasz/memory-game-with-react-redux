import {expect} from 'chai';

import randomTiles from 'app/data/randomTiles';

describe('randomTiles', ()=>{

  
  describe('getTiles()', () => {
    
    it('should return array', () => {
      expect(randomTiles.getTiles()).to.be.instanceof(Array);
    });
    
    it('should return array of 16 elements', () => {
      expect(randomTiles.getTiles().length).to.equal(16);
    });
    
  });

})