import expect from 'expect';

import * as actions from 'app/actions/actions';
import * as types from 'app/actions/actionTypes';

describe('Actions', () => {
  
  it('should generate start game action', () => {
    
    let action = {
      type: types.START_GAME
    };
    
    let res = actions.startGame();
    
    expect(res).toEqual(action);
    
  });
  
  it('should generate select tile action', () => {
    
    let action = {
      type: types.SELECT_TILE,
      id: '123'
    };
    
    let res = actions.selectTile(action.id);
    
    expect(res).toEqual(action);
    
  })
})