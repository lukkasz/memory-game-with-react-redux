import * as types from 'app/actions/actionTypes';
import memoryAPI from 'app/api/memoryAPI';

export var memoryReducer = (state=[], action) => {
  switch(action.type) {
    case types.START_GAME:
      return [
        ...state,
        ...memoryAPI.setup()
      ];
    
    case types.SELECT_TILE:
      return state.map((tile)=>{
        if (tile.id === action.id) {
          var src = tile.img;
          var selected = true;
          return {
            ...tile,
            src,
            selected
          }
        }
      })
      
    default: 
      return state;
  }
};