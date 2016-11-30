import * as types from 'app/actions/actionTypes';
import memoryAPI from 'app/api/memoryAPI';

// moram pratiti state tiles, selectedTiles
const INITIAL_STATE = {
  tiles: [],
  isWaiting: false,
  numberOfTries: 0
}


export var memoryReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case types.START_GAME:
      return {
        ...state,
        isWaiting: false,
        numberOfTries: 0,
        tiles: [...action.tiles]
      }
    
    case types.FLIP_TILE:
      //console.log("Index-ID:", state.tiles[action.index])
      
      const {index,tile} = action;
      
      var tile = state.tiles[index];
     
      return {
        ...state,
        tiles: [ 
          ...state.tiles.slice(0, index),
          {
            ...tile, 
            flipped: true
          }, 
         ...state.tiles.slice(index+1)
        ],
       }
       
    case types.IS_WAITING:
      console.log("from IS_WAITING action:", action.isWaiting);
      return {
        ...state,
        isWaiting: action.isWaiting
      }
    
    case types.MATCH_CHECK:
      let flippedTilesId = [];
      let {tiles} = state; 
      for (let id in tiles) {
        if (tiles[id].flipped === true && tiles[id].matched === false ) {
          console.log("From matched: ",tiles[id])
          flippedTilesId.push(id);
        }
      }
      
      if(tiles[flippedTilesId[0]].image === tiles[flippedTilesId[1]].image) {
        console.log("Slike su iste")
        let newTiles = tiles.map((tile)=>{
          if (tile.flipped == true && tile.matched == false) {
            return {
              ...tile,
              matched: true 
            }
          } else {
            return tile
          }
        })
        console.log("From Match:", [...tiles, ...newTiles])
        return {
          ...state,
          tiles: [...newTiles],
          isWaiting: false
        }
      } else {
        let newTiles = tiles.map((tile)=>{
          if (tile.flipped == true && tile.matched == false) {
            return {
              ...tile,
              flipped: false
            }
          } else {
            return tile
          }
        })
        console.log("From notMatch:", [...tiles, ...newTiles]);
        return {
          ...state,
          tiles: [...newTiles],
          isWaiting: false
        }
      }
    
    case types.INCREMENT_TRIES: 
      return {
        ...state,
        numberOfTries: state.numberOfTries + 1
      }
      
      
    default: 
      return state;
  }
};