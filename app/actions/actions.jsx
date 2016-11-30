import * as types from './actionTypes';
//import  _ from 'lodash';
import memoryAPI from 'app/api/memoryAPI';

export var startGame = () => {
  var tiles = memoryAPI.getTiles()
  return {
    type: types.START_GAME,
    tiles
  }
}

export var flipTile = (index, tile) => {
  return {
    type: types.FLIP_TILE,
    index,
    tile
  }
}

export var tilesMatched = (selectedTile1, selectedTile2) => {
  return {
    type: types.TILES_MATCHED,
    selectedTile1,
    selectedTile2
  }
}

export var tilesNotMatched = (selectedTile1, selectedTile2) => {
  return {
    type: types.TILES_NOT_MATCHED,
    selectedTile1,
    selectedTile2
  }
}