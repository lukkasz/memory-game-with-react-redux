import * as types from './actionTypes';

export var startGame = () => {
  return {
    type: types.START_GAME
  }
}

export var showTile = (id) => {
  return {
    type: types.SHOW_TILE,
    id
  }
}

export var checkIfMatch = (selectedTiles) => {
  return {
    type: types.CHECK_IF_MATCH,
    selectedTiles
  }
}