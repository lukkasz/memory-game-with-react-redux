import React from 'react';
import ReactDOM from 'react-dom';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';

import Gameboard from 'app/components/Gameboard';

describe('Gameboard', ()=>{
  it('should exist', () => {
    expect(Gameboard).toExist();
  })
})