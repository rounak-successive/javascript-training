/* Create a class called `Person` that has properties for `firstName`, `lastName`, and `age`. The class should also have a method called `fullName` that returns the person's full name.
Additionally, the class should have a method called `averageAge` that takes in an array of `Person` objects and returns the average age of all the people in the array.
*/

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  fullName() {
    const { firstName, lastName } = this
    return firstName + ' ' + lastName
  }

  static averageAge(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      sum += array[i].age
    }
    return sum / array.length
  }
}

const person1 = new Person('John', 'Doe', 30),
  person2 = new Person('Jane', 'Doe', 26),
  person3 = new Person('Rounak', 'Dwary', 22),
  persons = [person1, person2, person3]

console.log('The full name of the first person is:', person1.fullName())
console.log(
  'The average of the age of the recorded people is:',
  Person.averageAge(persons)
)
