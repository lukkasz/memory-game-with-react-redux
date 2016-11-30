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
    let {tile, index, flipTile} = this.props;
    
    flipTile(index, tile);
    
  }
  
  render(){
    var {tile} = this.props;
    var classTest = tile.flipped ? 'tile effect__click flipped' : 'tile effect__click'
   
    const tileBackStyle = {
       backgroundImage: 'url(' + tile.image + ')',
       backgroundSize: 'cover'
    };
    
    return (
      <div className={classTest} onClick={this.handleClickTile}>
        <div className="tile__front">
          <span className="tile__text">front</span>
        </div>
        <div className="tile__back" style={tileBackStyle}>
          <span className="tile__text">back</span>
        </div>
      </div>
    )
  }
  
  
}


function mapDispatchToProps(dispatch){
  return bindActionCreators({
    flipTile: actions.flipTile
  }, dispatch)
}



export default connect(null,mapDispatchToProps)(Tile);