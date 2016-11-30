import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import _ from 'lodash';

import memoryAPI from 'app/api/memoryAPI';
import Tile from 'app/components/Tile';
import * as actions from 'app/actions/actions';

class MemoryBoard extends Component {
  
  constructor(props) {
    super(props);
    this.renderTiles = this.renderTiles.bind(this);
  }

  componentDidUpdate() {
    var {tiles, isWaiting, matchCheck, incrementTries} = this.props;
    
    var flippedTiles = _.filter(tiles, _.matches({'flipped': true, 'matched': false}));
    console.log("Test tiles:", flippedTiles);
    
   if(flippedTiles.length >= 2) {
      isWaiting(true);
      incrementTries();
      
      setTimeout(()=>{
        matchCheck();
      }, 500);
      // dispatch action matchCheck
    }
    
  }
  renderTiles() {
    console.log("From MemoryBoard -> Tiles:", this.props.tiles)
    var {tiles} = this.props;

    return tiles.map((tile, i)=>{
      return (
        <Tile tile={tile} key={i} index={i}/>
      );
    });
  }
  
  render() {
    //console.log("Tiles from render:", this.props.tiles);
    return (
      <div className="container gameboard">
        <div className="row">
         {this.renderTiles()}
        </div>
      </div>
      
    )
  }
  
}

function mapStateToProps (state) {
  return {
    tiles:state.memory.tiles
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    isWaiting: actions.isWaiting,
    incrementTries: actions.incrementTries,
    matchCheck: actions.matchCheck
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(MemoryBoard);