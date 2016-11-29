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
  
  componentWillReceiveProps(nextProps) {
    var {selectedTile1, selectedTile2} = nextProps
    //console.log("SelectedTiel1 from memory board:", selectedTile1);
    //console.log("SelectedTiel2 from memory board:", selectedTile2);
    
    if (selectedTile1.tile && selectedTile2.tile) {
      if (memoryAPI.checkTiles(selectedTile1.tile,selectedTile2.tile)) {
        
          console.log("Iste...");
          
          this.props.tilesMatched(selectedTile1, selectedTile2);
          

      } else {
        setTimeout(()=>{
          console.log("Nisu Iste...")
          // dispatch not match action
          this.props.tilesNotMatched(selectedTile1, selectedTile2);
        }, 500) 
      }
    }
  }
  

  renderTiles() {
    console.log("From MemoryBoard -> Tiles:", this.props.tiles)
    var {tiles,selectedTile1,selectedTile2} = this.props;
    
    
    //console.log("From MemoryBoard -> SelectedTiel1:", selectedTile1);
    //console.log("From MemoryBoard -> SelectedTiel2:", selectedTile2);

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
    tiles:state.memory.tiles,
    selectedTile1: state.memory.selectedTile1,
    selectedTile2: state.memory.selectedTile2
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    tilesMatched: actions.tilesMatched,
    tilesNotMatched: actions.tilesNotMatched
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MemoryBoard);