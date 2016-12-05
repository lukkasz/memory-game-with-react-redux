import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import _ from 'lodash';

import Tile from 'app/components/Tile';
import * as actions from 'app/actions/actions';

export class MemoryBoard extends Component {
  
  constructor(props) {
    super(props);
    this.renderTiles = this.renderTiles.bind(this);
  }

  componentDidUpdate() {
    const {tiles, isWaiting, matchCheck, incrementTries} = this.props;
    const flippedTiles = _.filter(tiles, _.matches({'flipped': true, 'matched': false}));
    
    
    if(flippedTiles.length >= 2) {
      isWaiting(true);
      incrementTries();
      
      setTimeout(()=>{
        matchCheck(flippedTiles);
      }, 500);
    }
  }
  
  renderTiles() {
    const {tiles} = this.props;

    return tiles.map((tile, i)=>{
      return (
        <Tile tile={tile} key={i} index={i}/>
      );
    });
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
    tiles:state.memory.tiles
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    isWaiting: actions.isWaiting,
    incrementTries: actions.incrementTries,
    matchCheck: actions.matchCheck
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MemoryBoard);