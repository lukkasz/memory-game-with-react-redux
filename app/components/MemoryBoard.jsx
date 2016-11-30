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


export default connect(mapStateToProps)(MemoryBoard);