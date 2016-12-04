import {expect} from 'app/tests/test_helper';
const df = require('deep-freeze-strict');
import * as types from 'app/actions/actionTypes';
import * as reducers from 'app/reducers/memoryReducers';
import memoryAPI from 'app/api/memoryAPI';

var INITIAL_STATE = {
  tiles: [],
  selectedTiles: []
}

describe('Reducers', () => {
  
  describe('memoryReducer', () => {
    it('should initialize game', () => {
      var INITIAL_STATE = {
        tiles: [],
        isWaiting: false,
        numberOfTries: 0
      }
      
      var action = {
        type: types.START_GAME,
        tiles: memoryAPI.getTiles()
      }
      
      var res = reducers.memoryReducer(df(INITIAL_STATE), df(action));
      
      expect(res.tiles.length).to.equal(16);
    })
    
   /* it('should show tile image', () => {
      var INITIAL_STATE = {
        tiles: [ 
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
          }
        ],
        selectedTiles: []
      }
      
      var action = {
        type: types.SHOW_TILE,
        id: 'abc123'
      };
      
      var res = reducers.memoryReducer(df(INITIAL_STATE),df(action));
      
      expect(res.tiles[0].src).toEqual(res.tiles[0].img);
      expect(res.tiles[0].selected).toEqual(true);
      expect(res.selectedTiles.length).toEqual(1);
    });
    
    // Popravti ovaj test
    
    it('should check if tiles match', ()=>{
      var tiles = [
        {
          id:'abc123',
          key: 1,
          img: `assets/img/1.jpg`,
          deck: 'assets/img/deck.jpg',
          src: 'assets/img/deck.jpg',
          selected: false,
          match: false  
        },
        {
          id:'abc124',
          key: 2,
          img: `assets/img/1.jpg`,
          deck: 'assets/img/deck.jpg',
          src: 'assets/img/deck.jpg',
          selected: false,
          match: false  
        },
        {
          id:'abc125',
          key: 3,
          img: `assets/img/1.jpg`,
          deck: 'assets/img/deck.jpg',
          src: 'assets/img/deck.jpg',
          selected: false,
          match: false  
        },
        {
          id:'abc126',
          key: 1,
          img: `assets/img/1.jpg`,
          deck: 'assets/img/deck.jpg',
          src: 'assets/img/deck.jpg',
          selected: false,
          match: false  
        }
      ];
      
      var equalTiles = [
        {
            id:'abc123',
            key: 1,
            img: `assets/img/1.jpg`,
            deck: 'assets/img/deck.jpg',
            src: 'assets/img/1.jpg',
            selected: true,
            match: false  
          },
          {
            id:'abc124',
            key: 1,
            img: 'assets/img/1.jpg',
            deck: 'assets/img/deck.jpg',
            src: 'assets/img/1.jpg',
            selected: true,
            match: false  
          }
        ];
      
      var notEqualTiles = [
          {
            id:'abc123',
            key: 2,
            img: 'assets/img/1.jpg',
            deck: 'assets/img/deck.jpg',
            src: 'assets/img/1.jpg',
            selected: true,
            match: false  
          },
          {
            id:'abc123',
            key: 1,
            img: 'assets/img/1.jpg',
            deck: 'assets/img/deck.jpg',
            src: 'assets/img/1.jpg',
            selected: true,
            match: false  
          }
        ]
      
      var actionEqual = {
        type: types.CHECK_IF_MATCH,
        selectedTiles: equalTiles
      }
      
      var actionNotEqual = {
        type: types.CHECK_IF_MATCH,
        selectedTiles: notEqualTiles
      }
      
      var res = reducers.memoryReducer(df({tiles:tiles, selectedTiles:[]}), df(actionEqual));
      expect(res.tiles[0].match).toEqual(true);
      expect(res.tiles[0].selected).toEqual(false);
      
      res = reducers.memoryReducer(df({tiles:tiles, selectedTiles:[]}), df(actionNotEqual));
      expect(res.tiles[0].match).toEqual(false);
      expect(res.tiles[0].selected).toEqual(false);
      expect(res.tiles[0].src).toEqual(res.tiles[0].deck);
    })*/
  })
  
});