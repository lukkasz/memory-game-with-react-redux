import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import _ from 'lodash';

import Tile from 'app/components/Tile';
import * as actions from 'app/actions/actions';

export class TilesBoard extends Component {
  
  constructor(props) {
    super(props);
    this.renderTiles = this.renderTiles.bind(this);
    this.handleClickTile = this.handleClickTile.bind(this);
  }

  componentDidUpdate() {
    const {tiles, toggleIsWaiting, matchCheck, incrementTries} = this.props;
    const flippedTiles = _.filter(tiles, _.matches({'flipped': true, 'matched': false}));
    
    if(flippedTiles.length >= 2) {
      toggleIsWaiting(true);
      incrementTries();
      
      setTimeout(()=>{
        matchCheck(flippedTiles);
      }, 500);
    }
  }
  
  handleClickTile(tile, index){
    const {isWaiting, flipTile} = this.props;
   
    if(isWaiting) return;
    
    flipTile(index, tile);
    
  }
  
  renderTiles() {
    const {tiles} = this.props;
    if (tiles) {
      return tiles.map((tile, i)=>{
        return (
          <Tile tile={tile} key={i} index={i} onClick={this.handleClickTile}/>
        );
      });
    }
    return (
      <div>No tiles</div>
    )
  }
  
  render() {
    return (
      <div className="container gameboard">
        <div className="row">
         {this.renderTiles()}
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    tiles:state.tilesBoard.tiles,
    isWaiting: state.tilesBoard.isWaiting
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    toggleIsWaiting: actions.toggleIsWaiting,
    incrementTries: actions.incrementTries,
    matchCheck: actions.matchCheck,
    flipTile: actions.flipTile
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(TilesBoard);