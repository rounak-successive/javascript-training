// Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

class Shape {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  getArea() {
    console.log('The area of the Shape is:')
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height)
  }

  getArea() {
    super.getArea()
    return this.width * this.height
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height)
  }

  getArea() {
    super.getArea()
    return (this.width * this.height) / 2
  }
}

const rectangle = new Rectangle(4, 5),
  triangle = new Triangle(5, 8),
  shape = new Shape(2, 3)

console.log(rectangle.getArea())
console.log(triangle.getArea())
