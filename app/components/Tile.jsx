import React, {Component} from 'react';

const Tile = (props) => {
  var {id, src, front, selected} = props.tile;
  
  const handleClick = (e) => {
    e.preventDefault();
    if (props.onClickTile) {
      props.onClickTile(id);  
    }
  }
  return (
    <div className="col-xs-6 col-md-3" onClick={!selected ? handleClick : null }>
      <a href="#" className="thumbnail">
        <img className="img-responsive" src={props.tile.src} />
      </a>
    </div>  
  )
}

// export default class Tile extends Component {
//   constructor() {
//     super();
//     this.handleClick = this.handleClick.bind(this);
//   }
  
//   handleClick(e) {
//     e.preventDefault();
//     if (this.props.onClickTile) {
//       this.props.onClickTile(this.props.tile.id);  
//     }
    
//   }
  
//   render() {
//     var {src, front} = this.props.tile;
//     //console.log("length:",this.state.selectedCards.length)
//     return (
//       <div className="col-xs-6 col-md-3" onClick={src !== front  ? this.handleClick : null }>
//         <a href="#" className="thumbnail">
//           <img className="img-responsive" src={src} />
//         </a>
//       </div>  
//   )
//   }
// }

export default Tile;