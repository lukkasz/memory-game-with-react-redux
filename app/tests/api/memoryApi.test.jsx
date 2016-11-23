import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import memoryAPI from 'app/api/memoryAPI';

describe('memoryAPI', ()=>{
  it('should exist', () => {
    expect(memoryAPI).toExist();
  })
  
  describe('setup()', () => {
    it('should return array of 16 elements', () => {
      expect(memoryAPI.setup().length).toBe(16);
    })
  })

})