import * as types from 'app/actions/actionTypes';
import memoryAPI from 'app/api/memoryAPI';

// moram pratiti state tiles, selectedTiles
const INITIAL_STATE = {
  tiles: [],
}

export var memoryReducer = (state=[], action) => {
  switch(action.type) {
    case types.START_GAME:
      return [
        ...state,
        ...memoryAPI.setup()
      ];
    
    case types.SHOW_TILE:
      
      
      return state.map((tile)=>{
        if (tile.id === action.id) {
          var src = tile.img;
          var selected = true;
          return {
            ...tile,
            src,
            selected
          }
        } else {
          return tile;
        }
      });
      
    case types.CHECK_IF_MATCH:
      if(action.selectedTiles[0].key === action.selectedTiles[1].key) {
        // return state.filter((tile)=>{
        //   return tile.key !== action.selectedTiles[0].key;
        // })
        return state.map((tile)=>{
          if (tile.key === action.selectedTiles[0].key){
            var match = true
            var selected  = false;
            return {
              ...tile,
              match,
              selected
            }
          } else {
            return tile;
          }
        })
      } else {
        return state.map((tile)=>{
          if (tile.selected) {
            var selected = false;
            var src = tile.deck;
            return {
              ...tile,
              src,
              selected
            }
          } else {
            return tile;
          }
        });
      }
      
    default: 
      return state;
  }
};