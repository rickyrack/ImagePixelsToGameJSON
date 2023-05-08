const getPixels = require("get-pixels")

getPixels("test2.png", function(err, pixels) {
  if(err) {
    console.log("Bad image path")
    return
  }
  console.log("got pixels", pixels)
})