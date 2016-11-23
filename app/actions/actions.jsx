export var startGame = () => {
  return {
    type: 'START_GAME'
  }
}

export var selectTile = (id) => {
  return {
    type: 'SELECT_TILE',
    id
  }
}