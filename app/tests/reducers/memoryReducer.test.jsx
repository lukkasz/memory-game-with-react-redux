import expect from 'expect';
const df = require('deep-freeze-strict');
import * as types from 'app/actions/actionTypes';
import * as reducers from 'app/reducers/memoryReducers';

describe('Reducers', () => {
  
  describe('memoryReducer', () => {
    it('should start game', () => {
      var action = {
        type: types.START_GAME
      }
      
      var res = reducers.memoryReducer(df([]), df(action));
      
      expect(res.length).toBe(16);
    })
    
    it('should select tile', () => {
      var tiles = [{
        id:'abc123',
        key: 1,
        img: `assets/img/1.jpg`,
        deck: 'assets/img/deck.jpg',
        src: 'assets/img/deck.jpg',
        selected: false,
        matched: false  
      }];
      
      var action = {
        type: types.SELECT_TILE,
        id: 'abc123'
      };
      
      var res = reducers.memoryReducer(df(tiles),df(action));
      
      expect(res[0].src).toEqual(res[0].img);
      expect(res[0].selected).toEqual(true);
    })
  })
  
});