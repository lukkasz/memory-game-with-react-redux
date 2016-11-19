import _ from 'lodash';
import uuid from 'uuid';


function createImagesArray() {
  let images = [];
    
    for(let i=1; i < 9; i++) {
      let img = {
        key: i,
        front: `assets/img/${i}.jpg`,
        back: 'assets/img/deck.jpg'
      }
      images.push(img);
    }
    
    return _.concat(images, images);
}

function createTilesWithId(imgArray) {
  let tiles = imgArray.map((img)=>{
    return {
      ...img,
      src: img.back,
      id: uuid()
    }
  });
  
  return tiles;
}

export default {
  
  setup() {
  
    let imagesArray = createImagesArray();
    
    let tiles = createTilesWithId(imagesArray);
    
    return _.shuffle(tiles);
    
  } 
}