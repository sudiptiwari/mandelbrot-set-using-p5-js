function setup() {
  createCanvas(400, 400);
  pixelDensity(1); // sets the ratio of actual pixels to pixels displayed in canvas
  loadPixels(); // grabs pixels so that they can be accessed and modified
  for(var x = 0; x < width; x++) {
    for(var y = 0; y < height; y++) {
      var a = map(x, 0, width, -2, 2);
      var b = map(y, 0, height, -2, -2);
    }
  }
}

function draw() {
  background(210);
}
