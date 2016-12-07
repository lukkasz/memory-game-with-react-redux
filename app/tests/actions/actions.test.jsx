import {expect} from 'chai';
import { 
  START_GAME, 
  FLIP_TILE,
  TOGGLE_IS_WAITING,
  INCREMENT_TRIES,
  MATCH_CHECK
} from 'app/constants/ActionTypes';
import { 
  startGame, 
  flipTile,
  toggleIsWaiting,
  incrementTries,
  matchCheck
} from 'app/actions';


describe('Actions', () => {
  describe('startGame()', () => {
    let action;
    beforeEach(()=>{
       action = startGame();
    });
    
    it('has the correct type', () => {
      expect(action.type).to.equal(START_GAME);
    });
    
    it('has the correct payload', () => {
      expect(action.tiles).to.be.instanceof(Array);
      expect(action.tiles).to.have.length.above(0);
    });
    
  });
  
  describe('flipTile()', ()=>{
    let action;
    beforeEach(()=>{
      action = flipTile(0,'tile');
    });
    
    it('has the correct type', () => {
      expect(action.type).to.equal(FLIP_TILE);
    });
    
    it('has the correct payload', () => {
      expect(action.index).to.equal(0);
      expect(action.tile).to.equal('tile');
    });
    
  });
  
  describe('toggleIsWaiting()', ()=>{
    let action;
    beforeEach(()=>{
      action = toggleIsWaiting(true);
    });
    
    it('has the correct type', () => {
      expect(action.type).to.equal(TOGGLE_IS_WAITING);
    });
    
    it('has the correct payload', () => {
      expect(action.isWaiting).to.be.true;
    });
  });
  
  describe('incrementTries()', ()=>{
    let action;
    beforeEach(()=>{
      action = incrementTries();
    });
    
    it('has the correct type', () => {
      expect(action.type).to.equal(INCREMENT_TRIES);
    });
    
    it('has no payload', () => {
      expect(action.payload).to.not.exist;
    });
  });
  
  
  describe('matchCheck()', () => {
    let action;
    beforeEach(()=>{
      let flippedTiles = [{id:1, name:'Tile1'}, {id:2, name:'Tile2'}]
      action = matchCheck(flippedTiles);
    });
    
    it('has the correct type', () => {
      expect(action.type).to.equal(MATCH_CHECK);
    });
    
    it('has the correct payload', () => {
      expect(action.flippedTiles).to.be.instanceof(Array);
      expect(action.flippedTiles).to.have.lengthOf(2);
    });
  });
  
});
