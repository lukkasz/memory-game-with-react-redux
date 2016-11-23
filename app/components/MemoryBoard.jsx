import React, {Component} from 'react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import _ from 'lodash';

//import memoryAPI from 'app/api/memoryAPI';
import Tile from 'app/components/Tile';
import * as actions from 'app/actions/actions';

class MemoryBoard extends Component {
  
  constructor(props) {
    super(props);
    this.renderTiles = this.renderTiles.bind(this);
  }
  
  
  componentDidUpdate(){
    
    // how to separate this ?!?!!?
    this.selected = this.props.tiles.filter((tile)=>{
      return tile.selected;
    });
    const SELECTED_TILES_LENGTH =  this.selected.length === 2 ? true : false;
    
    if (SELECTED_TILES_LENGTH) {
      setTimeout(()=>{
        this.props.checkIfMatch(this.selected);  
      }, 2000);
      
    }
  }
  
  renderTiles() {
    var {tiles, checkIfMatch} = this.props;
    
    if (tiles.length === 0) {
      return (<div>Loading...</div>);
    } else {
      
      return tiles.map((tile)=>{
        return (
          <Tile tile={tile} key={tile.id} disableClickOnTiles={false}/>
        );
      });
    }
  }
  
  render() {
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
    tiles:state.memory
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    checkIfMatch: actions.checkIfMatch
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MemoryBoard);