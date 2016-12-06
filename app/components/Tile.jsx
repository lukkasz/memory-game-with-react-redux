import React, {Component} from 'react';

import * as actions from 'app/actions';

const Tile = (props) =>{

  const {tile, index, onClickTile} = props;
  let classFlipped = tile.flipped ? 'tile effect__click flipped' : 'tile effect__click';
     
  const tileBackgroundImage = {
     backgroundImage: 'url(' + tile.image + ')'
  };
      
  return (
    
    <div className={classFlipped} onClick={()=>{onClickTile(tile, index)}}>
      <div className="tile__front">
      </div>
      <div className="tile__back" style={tileBackgroundImage}>
      </div>
    </div>
  );
  
}

export default Tile;
