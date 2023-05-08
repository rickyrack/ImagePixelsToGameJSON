const getPixels = require("get-pixels")

// change this for every image you are converting
const width = 128;
const height = 100;

const tileTypes = require('tile_types.json');
const map = {}

getPixels("test2.png", function(err, pixels) {
  if(err) {
    console.log("Bad image path")
    return
  }
  console.log("Got Pixels!")
  for (let a = 0; a < height; a++) {
    //row loop
    const widthCheck = width;
    for (let b = 0; b < array.length-1; b+4) {
      //pixel array rgba loop(1 pixel has 4 values)
      ifasfaf
      const currentPixel =
        `${pixels.data[b]}, ${pixels.data[b+1]}, ${pixels.data[b+2]}`;
      let currentType = null; //defaults to null if no pixel
      object.keys(tileTypes).forEach(type => {
        if(currentPixel == tileTypes.type) {
          currentType = type;
        }
      })
      map[`row${a}`].
    }

  }
    // json data will be utilized somewhere above here
    // the data must show neighboring tiles as well
    // account for no tile although properly placed water should not cause this
    // perhaps just make no tile water? or all water just no tile? so then its water basically?
    // emoji conversion will be done in game folder(is it better that way??)
})