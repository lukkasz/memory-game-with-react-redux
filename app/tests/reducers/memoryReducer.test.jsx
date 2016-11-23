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
    
    it('should show tile image', () => {
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
        type: types.SHOW_TILE,
        id: 'abc123'
      };
      
      var res = reducers.memoryReducer(df(tiles),df(action));
      
      expect(res[0].src).toEqual(res[0].img);
      expect(res[0].selected).toEqual(true);
    });
    
    it('should check if tiles match', ()=>{
      var tiles = [
        {
          id:'abc123',
          key: 1,
          img: `assets/img/1.jpg`,
          deck: 'assets/img/deck.jpg',
          src: 'assets/img/deck.jpg',
          selected: false,
          matched: false  
        },
        {
          id:'abc124',
          key: 2,
          img: `assets/img/1.jpg`,
          deck: 'assets/img/deck.jpg',
          src: 'assets/img/deck.jpg',
          selected: false,
          matched: false  
        },
        {
          id:'abc125',
          key: 3,
          img: `assets/img/1.jpg`,
          deck: 'assets/img/deck.jpg',
          src: 'assets/img/deck.jpg',
          selected: false,
          matched: false  
        },
        {
          id:'abc126',
          key: 1,
          img: `assets/img/1.jpg`,
          deck: 'assets/img/deck.jpg',
          src: 'assets/img/deck.jpg',
          selected: false,
          matched: false  
        }
      ];
      
      var actionEqual = {
        type: types.CHECK_IF_MATCH,
        selectedTiles: [
          {
            id:'abc123',
            key: 1,
            img: `assets/img/1.jpg`,
            deck: 'assets/img/deck.jpg',
            src: 'assets/img/1.jpg',
            selected: true,
            matched: false  
          },
          {
            id:'abc124',
            key: 1,
            img: 'assets/img/1.jpg',
            deck: 'assets/img/deck.jpg',
            src: 'assets/img/1.jpg',
            selected: true,
            matched: false  
          }
        ]
      }
      
      var actionNotEqual = {
        type: types.CHECK_IF_MATCH,
        selectedTiles: [
          {
            id:'abc123',
            key: 2,
            img: 'assets/img/1.jpg',
            deck: 'assets/img/deck.jpg',
            src: 'assets/img/1.jpg',
            selected: true,
            matched: false  
          },
          {
            id:'abc123',
            key: 1,
            img: 'assets/img/1.jpg',
            deck: 'assets/img/deck.jpg',
            src: 'assets/img/1.jpg',
            selected: true,
            matched: false  
          }
        ]
      }
      
      var res = reducers.memoryReducer(df(tiles), df(actionEqual));
      expect(res.length).toEqual(2);
     
      res = reducers.memoryReducer(df(tiles), df(actionNotEqual));
      expect(res.length).toEqual(4);
      expect(res[0].src).toEqual(res[0].deck);
    })
  })
  
});