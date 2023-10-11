// Create a class Shape with properties width and height and methods getArea(). Create two classes Rectangle and Triangle that inherit from the Shape class and implement the getArea() method for their respective shapes.

class Shape {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  getArea() {
    return this.height * this.width
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height)
  }

  getArea() {
    const area = super.getArea()
    return 'The area of the Rectangle is: ' + area
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height)
  }

  getArea() {
    const area = super.getArea() / 2
    return 'The area of the Triangle is: ' + area
  }
}

const rectangle = new Rectangle(4, 5),
  triangle = new Triangle(5, 8)

console.log(rectangle.getArea())
console.log(triangle.getArea())
