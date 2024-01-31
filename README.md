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

