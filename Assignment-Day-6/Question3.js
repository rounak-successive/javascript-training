// 1. Create a class Person with properties name, age, gender, and interests. Add a method greeting() that returns a string introducing the person. Also add a method farewell() that returns a string saying goodbye to the person.

class Person {
  constructor(name, age, gender, interests) {
    this.name = name
    this.age = age
    this.gender = gender
    this.interests = interests
  }

  greeting() {
    const { name, age, interests } = this
    return `Hello, My name is ${name} and I am ${age} years old. My interests are ${interests}.`
  }

  farewell() {
    return `Goodbye, ${this.name}.`
  }
}

// 2. Create a class Student that inherits from the Person class and has a property studies. Override the greeting() method to include information about what the student is studying.

class Student extends Person {
  constructor(name, age, gender, interests, studies) {
    super(name, age, gender, interests)
    this.studies = studies
  }

  greeting() {
    const { name, age, interests, studies } = this
    return `Hello, My name is ${name} and I am ${age} years old. My interests are ${interests}. I am studying ${studies}.`
  }
}

//3. Create a class Teacher that inherits from the Person class and has a property subjectsTaught. Override the farewell() method to include information about what the teacher teaches.

class Teacher extends Person {
  constructor(name, age, gender, interests, subjectsTaught) {
    super(name, age, gender, interests)
    this.subjectsTaught = subjectsTaught
  }

  farewell() {
    return `Goodbye, ${this.name} who taught ${this.subjectsTaught}.`
  }
}

// Test the classes

const person = new Person(
  'Rounak Dwary',
  23,
  'Male',
  'Coding,Table Tennis and Music'
)
console.log(person.greeting())
console.log(person.farewell())

const student = new Student(
  'Shivam Singh',
  20,
  'Male',
  'Gaming and Cricket',
  'Computer Science'
)
console.log(student.greeting())

const teacher = new Teacher(
  'H.C. Verma',
  68,
  'Male',
  'Astrophysics, Computer Science and Classical Music',
  'Physics'
)
console.log(teacher.greeting())
console.log(teacher.farewell())
