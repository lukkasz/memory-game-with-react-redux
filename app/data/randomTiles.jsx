import _ from 'lodash';

var _tiles = [];

function generateTiles() {
  _tiles = [];
  let images = [];
    
    for(let i=1; i < 9; i++) {
      images.push(
        {
          image: `assets/img/${i}.jpg`,
          flipped: false,
          matched: false
        });
    }
    
    _tiles =  _.shuffle(_.concat(images, images));
    
}


function getTiles() {
    generateTiles();
    return _tiles;
}

export default {
  getTiles: getTiles
}



