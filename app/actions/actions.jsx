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

export var isWaiting = (isWaiting) => {
  return {
    type: types.IS_WAITING,
    isWaiting
  }
}

export var incrementTries = () => {
  return {
    type: types.INCREMENT_TRIES
  }
}

export var matchCheck = (flippedTiles) => {
  return {
    type: types.MATCH_CHECK,
    flippedTiles
  }
}


