import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import _ from 'lodash';

import Tile from 'app/components/Tile';
import * as actions from 'app/actions';

export class TilesBoard extends Component {
  
  constructor(props) {
    super(props);
    this.renderTiles = this.renderTiles.bind(this);
    this.onHandleClickTile = this.onHandleClickTile.bind(this);
  }

  componentDidUpdate(){
    const {tiles, toggleIsWaiting, matchCheck, incrementTries} = this.props;
    const flippedTiles = _.filter(tiles, _.matches({'flipped': true, 'matched': false}));
    
   
   if(flippedTiles.length >= 2) {
      toggleIsWaiting(true);

      // try to fix componentDidUpdate called twice
      // becaue actions are wrapped inside if statement
      if(this.props.isWaiting) {
        incrementTries();  
        setTimeout(()=>{
          matchCheck(flippedTiles);
        }, 500);
      }
      

      
      
    }
  }
  
  onHandleClickTile(tile, index){
    const {flipTile, isWaiting} = this.props;
    

    if(isWaiting) return;
    
    flipTile(index, tile);
    
  }
  
  renderTiles() {
    const {tiles} = this.props;
    //if (tiles) {
      return tiles.map((tile, i)=>{
        return (
          <Tile tile={tile} key={i} index={i} onClickTile={this.onHandleClickTile}/>
        );
      });
    /*}
    return (
      <div>No tiles</div>
    )*/
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
    tiles:state.memory.tiles,
    isWaiting: state.memory.isWaiting
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