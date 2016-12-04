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
    
    if(this.props.isWaiting) return;
    let {tile, index, flipTile} = this.props;
    
    flipTile(index, tile);
  }
  
  render(){
    var {tile} = this.props;
    var classTest = tile.flipped ? 'tile effect__click flipped' : 'tile effect__click'
   
    const tileBackStyle = {
       backgroundImage: 'url(' + tile.image + ')',
       backgroundSize: '90% 90%',
       backgroundPosition: 'center',
       backgroundRepeat: 'no-repeat'
    };
    
    return (
      <div className={classTest} onClick={this.handleClickTile}>
        <div className="tile__front">
        </div>
        <div className="tile__back" style={tileBackStyle}>
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

function mapStateToProps(state) {
  return {
    isWaiting: state.memory.isWaiting
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Tile);