import React from 'react';

const Tile = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    var {id} = props.tile;
    console.log("front", id);
    
    props.onClickTile(id);
  }
  return (
    <div className="col-xs-6 col-md-3" onClick={handleClick}>
      <a href="#" className="thumbnail">
        <img className="img-responsive" src={props.tile.src} />
      </a>
    </div>  
  )
}

export default Tile;