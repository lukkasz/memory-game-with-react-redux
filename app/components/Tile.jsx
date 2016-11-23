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
    let {tile, showTile} = this.props; 
    showTile(tile.id);
    
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
    showTile: actions.showTile
  }, dispatch)
}


export default connect(null,mapDispatchToProps)(Tile);