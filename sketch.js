class Complex{
  constructor(a, b) {
    this.x = a;
    this.y = b;
  }

  square() {
    let a = (this.x*this.x - this.y*this.y);
    let b = (2*this.x*this.y);
    return new Complex(a,b); 
  }

  add(c) {
    return new Complex(this.x + c.x, this.y + c.y);
  }

  getMagnitude() {
    return dist(0, 0, this.x, this.y);
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }
}


function setup() {
  const aspect_ratio = (16/9);
  const mapping_range = 1;
  let canvas;
  // canvas = createCanvas(windowHeight, windowHeight);
  // canvas.position(windowWidth/2-windowHeight/2,0);

  canvas = createCanvas(windowWidth, windowHeight);
  // canvas.position(windowWidth/2-windowHeight/2,0);

  pixelDensity(1); // sets the ratio of actual pixels to pixels displayed in canvas
  loadPixels(); // grabs pixels so that they can be accessed and modified

  for(var x = 0; x < width; x++) {
    for(var y = 0; y < height; y++) {
      // flag = false;
      let a = map(x, 0, width, -aspect_ratio * mapping_range, aspect_ratio * mapping_range); // map(original value, original range1, original range2, final range1, final range2)
      let b = map(y, 0, height, -mapping_range, mapping_range);
      
      let z = new Complex(0,0);
      let c = new Complex(a,b);
      var n = 0;

      while(n < 100) {
        let z_square = z.square();
        let next_z = z_square.add(c);
        if(z.getMagnitude() > 16) {
          // break with value of n when magnitude is bigger than 16
          break;
        }
        z = next_z;
        n++;
      }
      
      // check the value of n when magnitude > 16
      // if value of n is large when magnitude > 16, then it converges, so dark(brightness = 0)
      // if value of n is small when magnitude > 16, then it diverges, so bright(brightness = 255)
      let brightness = map(n, 0, 100, 255, 0); // map small n to 255(bright) and big n to 0(dark)
      let colorValue = color(brightness);
      set(x, y, colorValue);
    }
  }
  updatePixels();
}



