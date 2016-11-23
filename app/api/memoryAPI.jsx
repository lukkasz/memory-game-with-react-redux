import _ from 'lodash';
import uuid from 'uuid';


function createImagesArray() {
  let images = [];
    
    for(let i=1; i < 9; i++) {
      let img = {
        key: i,
        img: `assets/img/${i}.jpg`,
        deck: 'assets/img/deck.jpg',
        selected: false,
        matched: false 
      }
      images.push(img);
    }
    
    return _.concat(images, images);
}

function createTilesWithId(imgArray) {
  let tiles = imgArray.map((img)=>{
    return {
      ...img,
      src: img.deck,
      id: uuid()
    }
  });
  
  return tiles;
}

function setup() {
    
    let imagesArray = createImagesArray();
    
    let tiles = createTilesWithId(imagesArray);
    
    return _.shuffle(tiles);
}

export default {
  
  setup: setup
  
}



