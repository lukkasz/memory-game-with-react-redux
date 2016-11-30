import _ from 'lodash';
import uuid from 'uuid';

var _tiles = [];

function generateTiles() {
  let images = [];
    
    for(let i=1; i < 9; i++) {
      /*let img = {
        key: i,
        id: uuid(),
        img: `assets/img/${i}.jpg`,
        deck: 'assets/img/deck.jpg',
        src: 'assets/img/deck.jpg',
        selected: false,
        matched: false 
      }*/
      images.push(`assets/img/${i}.jpg`);
    }
    
    images =  _.shuffle(_.concat(images, images));
    
    for(let i=0; i<images.length; i++) {
      let _tile = {
        image: images[i],
        flipped: false,
        matched: false
      }
      _tiles.push(_tile);
    }
}

function checkTiles(tile1, tile2) {

  if(tile1.key === tile2.key) {
    // return tile1 postavljenim match attributom
    return true;
  } else {
    return false;
  }
  
}

function getTiles() {
    generateTiles();
    return _tiles;
}

export default {
  
  getTiles: getTiles,
  generateTiles: generateTiles,
  checkTiles: checkTiles
  
}



