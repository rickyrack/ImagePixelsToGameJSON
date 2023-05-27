const getPixels = require("get-pixels");
const { pixelAdjust } = require("./pixel_adjust");


// change width and height for the image you are converting to a map
const width = 110;
const height = 70;

// MAX or more than number of emojis that will represent any given tile type
const maxEmojis = 10;

let widthCounter = 0;

const tileSet = require('./tile_set.json');
const map = [];

//setup for each column in 2d array
for (let i = 0; i < width; i++) {
  map[i] = [];
}

getPixels("map_image.png", function(err, pixels) {
  if(err) {
    console.log("Bad image path")
    return
  }
  console.log("Got Pixels!")
    for (let i = 0; i < pixels.data.length-1; i+=4) {
      //pixel array rgba loop(1 pixel has 4 values)
      let currentPixel =
        `${pixels.data[i]}, ${pixels.data[i+1]}, ${pixels.data[i+2]}`;
      currentPixel = pixelAdjust(currentPixel);
      let currentType = null; //defaults to null if no pixel
      Object.keys(tileSet).forEach(tile => {
        if(currentPixel == tileSet[tile]) {
          currentType = tile;
        }
      })

          map[widthCounter].push({
            type: currentType,
            coords: [widthCounter, map[widthCounter].length],
            emojiNum: Math.floor(Math.random() * maxEmojis),
            rgb: currentPixel
          })
      

        if(widthCounter === width-1) {
          widthCounter = 0;
        }
        else {
          widthCounter++;
        }
    }

    const mapData = {
      map
    }

    const fs = require('fs');

// write the map object to a JSON file
fs.writeFile('map.json', JSON.stringify(mapData, null, 2), (err) => {
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