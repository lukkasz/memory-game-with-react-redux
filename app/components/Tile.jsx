import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'

import * as actions from 'app/actions/actions';

class Tile extends Component {
  constructor(){
    super();
    this.handleClickTile = this.handleClickTile.bind(this);
  }  
  
  handleClickTile(e) {
    e.preventDefault();
    let {tile, index, selectTile, selectedTile1, selectedTile2} = this.props; 
    if (!selectedTile1.tile || !selectedTile2.tile) {
      selectTile(index, tile);  
    } else {
      console.log("From Tile Component: Ne radi click ")
    }
    
    //console.log("From Tile Component -> Tile:", tile);
    //console.log("From Tile Component -> Index:", index);
    
  }
  
  render(){
    var {tile, disableClickOnTiles} = this.props;
   // console.log("Prosp", this.props);
    return (
    <div className="col-xs-6 col-md-3" >
      <a href="#" className="thumbnail">
        <img className="img-responsive" src={tile.src} onClick={ disableClickOnTiles ? null :  this.handleClickTile}/>
      </a>
    </div>  
  )
  }
  
  
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({
    selectTile: actions.selectTile
  }, dispatch)
}

function mapStateToProps(state){
  return{
    selectedTile1: state.memory.selectedTile1,
    selectedTile2: state.memory.selectedTile2
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Tile);