
export class Shape {
    constructor() {}
    area() {
      throw new Error("Method 'area()' must be implemented.");
    }
    perimeter() {
      throw new Error("Method 'perimeter()' must be implemented.");
    }
    toString() {
      return `Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }
  }
  
  export class Rectangle extends Shape {
    constructor(width, height) {
      super();
      this.width = width;
      this.height = height;
    }
  
    area() {
      return this.width * this.height;
    }
  
    perimeter() {
      return 2 * (this.width + this.height);
    }
  
    toString() {
      return `Rectangle - ${super.toString()}`;
    }
  }
  
  export class Square extends Rectangle {
    constructor(side) {
      super(side, side);
    }
    toString() {
      return `Square - ${super.toString()}`;
    }
  }
  
  export class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius;
    }
  
    area() {
      return Math.PI * this.radius ** 2;
    }
  
    perimeter() {
      return 2 * Math.PI * this.radius;
    }
  
    toString() {
      return `Circle - ${super.toString()}`;
    }
  }
  