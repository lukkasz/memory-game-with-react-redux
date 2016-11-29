import * as types from 'app/actions/actionTypes';
import memoryAPI from 'app/api/memoryAPI';

// moram pratiti state tiles, selectedTiles
const INITIAL_STATE = {
  tiles: [],
  selectedTile1: {index: null, tile: null},
  selectedTile2: {index: null, tile: null},
}

export var memoryReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case types.START_GAME:
      //console.log("New tiles:", action.newTiles)
      return {
        ...state,
        tiles: action.tiles
      }
    
    case types.SELECT_TILE:
      //console.log("Index-ID:", state.tiles[action.index])
      
      const {index,tile} = action;
      let newSelectedTile1 = state.selectedTile1.tile === null ? {index, tile} : state.selectedTile1;
      let newSelectedTile2 = state.selectedTile1.tile && state.selectedTile2.tile === null ? {index, tile} : state.selectedTile2.tile;
     
      /*if (state.selectedTile1.tile === null) {
        newSelectedTile1 = {
          index,
          tile
        }
      } else if (state.selectedTile1.tile && state.selectedTile2.tile === null) {
        newSelectedTile2 = {
          index,
          tile
        }
      }*/
      
      var tile = state.tiles[index];
      
     
      return {
        ...state,
        tiles: [ 
          ...state.tiles.slice(0, index),
          {
            ...tile, 
            src: tile.img,
            selected: true
          }, 
         ...state.tiles.slice(index+1)
        ],
        
        selectedTile1: {...state.selectedTile1, ...newSelectedTile1},
        selectedTile2: {...state.selectedTile2, ...newSelectedTile2}
        
        
      
       }
      
    case types.TILES_MATCHED:
      // set matched to True
      console.log("Tiels matched")
      let newTiles  = state.tiles.map((tile)=>{
        if (tile.key === action.selectedTile1.tile.key) {
          return { 
            ...tile,
            matched: true
          }
        } 
        return tile;
      })
      return {
        ...state,
        tiles: [...newTiles],
        selectedTile1: {...state.selectedTile1, index:null, tile: null },
        selectedTile2: {...state.selectedTile2, index:null, tile: null }
      };
      
    case types.TILES_NOT_MATCHED:
      // set src to deck
      console.log("Tiels not matched");
      let newTiles2  = state.tiles.map((tile)=>{
        if (tile.key === action.selectedTile1.tile.key || tile.key === action.selectedTile2.tile.key ) {
          return { 
            ...tile,
            src: action.selectedTile1.tile.deck
          }
        } 
        return tile;
      })
      return {
        ...state,
        tiles: [...newTiles2],
        selectedTile1: {...state.selectedTile1, index:null, tile: null },
        selectedTile2: {...state.selectedTile2, index:null, tile: null }
      };
        
      
    default: 
      return state;
  }
};