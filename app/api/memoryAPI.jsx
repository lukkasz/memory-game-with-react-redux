import _ from 'lodash';
import uuid from 'uuid';


function createImagesArray() {
  let images = [];
    
    for(let i=1; i < 9; i++) {
      let img = {
        key: i,
        id: uuid(),
        img: `assets/img/${i}.jpg`,
        deck: 'assets/img/deck.jpg',
        src: 'assets/img/deck.jpg',
        selected: false,
        matched: false 
      }
      images.push(img);
    }
    
    return _.concat(images, images);
}

function checkTiles(tile1, tile2) {

  if(tile1.key === tile2.key) {
    // return tile1 postavljenim match attributom
    return true;
  } else {
    return false;
  }
  
}

function setup() {
    
    let imagesArray = createImagesArray();
    
    //let tiles = createTilesWithId(imagesArray);
    
    return _.shuffle(imagesArray);
}

export default {
  
  setup: setup,
  checkTiles: checkTiles
  
}



