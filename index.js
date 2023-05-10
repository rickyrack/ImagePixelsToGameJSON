const getPixels = require("get-pixels")

// change width and height for the image you are converting to a map
const width = 128;
const height = 100;

let widthCounter = 0;
let heightCounter = 0;

const tileSet = require('./tile_set.json');
const map = {};

//setup for each row in map object
for (let i = 0; i < height; i++) {
  map[`row${i}`] = {};
}


getPixels("test2.png", function(err, pixels) {
  if(err) {
    console.log("Bad image path")
    return
  }
  console.log("Got Pixels!")
    for (let i = 0; i < pixels.data.length-1; i+=4) {
      //pixel array rgba loop(1 pixel has 4 values)
      const currentPixel =
        `${pixels.data[i]}, ${pixels.data[i+1]}, ${pixels.data[i+2]}`;
      let currentType = null; //defaults to null if no pixel
      Object.keys(tileSet).forEach(tile => {
        if(currentPixel == tileSet[tile]) {
          currentType = tile;
        }
      })
      map[`row${heightCounter}`][`${[widthCounter]}, ${heightCounter}`] =
        {
          type: currentType,
          coords: [widthCounter, heightCounter],
          north: 'test north',
          east: 'test east',
          south: 'test south',
          west: 'test west'
        }

        if(widthCounter === width-1) {
          widthCounter = 0;
          heightCounter++;
        }
        else {
          widthCounter++;
        }
    }
    //console.log(map.row99);

    const fs = require('fs');

// write the map object to a JSON file
fs.writeFile('map.json', JSON.stringify(map, null, 2), (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Map data has been written to map.json');
});

    console.log('done');

    // json data will be utilized somewhere above here
    // the data must show neighboring tiles as well
    // account for no tile although properly placed water should not cause this
    // perhaps just make no tile water? or all water just no tile? so then its water basically?
    // emoji conversion will be done in game folder(is it better that way??)
})