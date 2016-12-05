import React, {Component} from 'react';

import * as actions from 'app/actions/actions';

const Tile = (props) =>{

  const {tile, index} = props;
  let classFlipped = tile.flipped ? 'tile effect__click flipped' : 'tile effect__click';
     
  const tileBackStyle = {
     backgroundImage: 'url(' + tile.image + ')',
     backgroundSize: '90% 90%',
     backgroundPosition: 'center',
     backgroundRepeat: 'no-repeat'
  };
      
  return (
    
    <div className={classFlipped} onClick={()=>{props.onClick(tile, index)}}>
      <div className="tile__front">
      </div>
      <div className="tile__back" style={tileBackStyle}>
      </div>
    </div>
  );
  
}

export default Tile;
