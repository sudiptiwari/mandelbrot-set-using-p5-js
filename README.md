# Demo Video:
https://github.com/sudiptiwari/mandelbrot-set-using-p5-js/assets/96374316/aa02d6d8-0bcf-432a-9128-7327c66a958c

# Mandelbrot Plot Generator

This project is a Mandelbrot Plot generator implemented using the p5.js library inspired from [this video](https://www.youtube.com/watch?v=FFftmWSzgmk).

## Overview

The **Mandelbrot Set** is a fascinating fractal discovered by Benoît B. Mandelbrot in 1980. Images of the Mandelbrot set exhibit an infinitely complicated boundary that reveals progressively ever-finer recursive detail at increasing magnifications; mathematically, the boundary of the Mandelbrot set is a fractal curve. The Mandelbrot Set has become iconic for its intricate and infinitely complex patterns. Here, it is generated using complex numbers and p5.js for rendering. 

## Complex Numbers

A **complex number** is a number of the form `a + bi`, where `a` and `b` are real numbers, and `i` is the imaginary unit (where `i^2 = -1`). In this project, complex numbers are represented by a custom class in JavaScript:

```javascript
class Complex {
  constructor(a, b) {
    this.x = a;
    this.y = b;
  }

  square() {
    let a = this.x * this.x - this.y * this.y;
    let b = 2 * this.x * this.y;
    return new Complex(a, b);
  }

  add(c) {
    return new Complex(this.x + c.x, this.y + c.y);
  }

  getMagnitude() {
    return dist(0, 0, this.x, this.y);
  }
}
```
## Mandelbrot Plot Generation

The following JavaScript code utilizes the p5.js library to generate a Mandelbrot plot. The Mandelbrot set is a well-known fractal with intricate and self-replicating patterns, discovered by Benoît B. Mandelbrot in 1980.

### Setup Function

The `setup` function initializes the canvas and sets up the environment for Mandelbrot plot generation. Here's a breakdown of the code:

```javascript
function setup() {
  const aspect_ratio = 16/9;
  mapping_range = 1;
  let canvas;

  // Uncomment the line below to create a square canvas centered in the window
  // canvas = createCanvas(windowHeight, windowHeight);
  // canvas.position(windowWidth/2 - windowHeight/2, 0);

  // Create a canvas with the window's width and height
  canvas = createCanvas(windowWidth, windowHeight);
  // Uncomment the line below to create a square canvas centered in the window
  // canvas.position(windowWidth/2 - windowHeight/2, 0);

  pixelDensity(1); // Sets the ratio of actual pixels to pixels displayed in the canvas
  loadPixels(); // Grabs pixels so that they can be accessed and modified
```

The `aspect_ratio` variable defines the aspect ratio of the canvas, and `mapping_range` sets the range for mapping coordinates to the Mandelbrot set.

### Nested Loops for Pixel Mapping
The nested loops iterate over each pixel in the canvas, mapping its coordinates to complex numbers in the Mandelbrot set:
```javascript
for (var x = 0; x < width; x++) {
  for (var y = 0; y < height; y++) {
    let a = map(x, 0, width, -aspect_ratio * mapping_range, aspect_ratio * mapping_range);
    let b = map(y, 0, height, -mapping_range, mapping_range);

    let z = new Complex(0, 0);
    let c = new Complex(a, b);
    var n = 0;
```

### Mandelbrot Iterations
The heart of the Mandelbrot plot generation lies in the iterative calculation of complex numbers. The code utilizes a while loop to iterate over each pixel until a certain condition is met, typically when the magnitude of the complex number exceeds a predefined threshold:
```javascript
while (n < 100) {
  let z_square = z.square();
  let next_z = z_square.add(c);

  if (z.getMagnitude() > 16) {
    // Break the loop when the magnitude is bigger than 16
    break;
  }

  z = next_z;
  n++;
}
```
Within this loop, the complex number `z` is squared and added to the initial complex number `c`. If the magnitude of `z` exceeds `16`, the loop breaks. The number of iterations `n` is then used to determine the brightness of the pixel.

### Color Mapping
The brightness of each pixel is mapped based on the number of iterations `(n)`. Dark colors indicate points that converge, while bright colors represent points that diverge:

```javascript
let brightness = map(n, 0, 100, 255, 0);
let colorValue = color(brightness);
set(x, y, colorValue);
```
The map function is used to translate the range of `n` (from `0` to `100`) to a brightness value (from `255` to `0`). The resulting color is then assigned to the pixel using the set function.

## Conclusion
In conclusion, this Mandelbrot Plot Generator allows for the exploration of the fascinating Mandelbrot Set, showcasing its intricate and self-replicating patterns through the visualization of complex numbers on a canvas. Feel free to experiment with the parameters, such as canvas size, mapping range, and iteration limits, to create unique and captivating Mandelbrot plots.
