const pixelAdjust = (pixels) => {
    const tileSet = require('./tile_set.json');
    const pixelArray = pixels.split(', ');
    let confirmColor = 0;
    let wrongColor = null;
    Object.keys(tileSet).forEach(tile => {
        const rgbArray = tileSet[tile].split(', ');
        if(rgbArray[0] === pixelArray[0]) {
            confirmColor++;
        }
        else {
            wrongColor = 0;
        }
        if(rgbArray[1] === pixelArray[1]) {
            confirmColor++;
        }
        else {
            wrongColor = 1;
        }
        if(rgbArray[2] === pixelArray[2]) {
            confirmColor++;
        }
        else {
            wrongColor = 2;
        }
        if(confirmColor === 2) {
            pixelArray[wrongColor] = rgbArray[wrongColor];
        }
        confirmColor = 0;
        wrongColor = null;
    })
    const pixelData = pixelArray.join(', ')
    return pixelData;
}

module.exports = { pixelAdjust };