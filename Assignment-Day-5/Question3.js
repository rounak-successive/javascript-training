// Write a program to remove all the id key from array of object ({name:"John", age:27, id:1})

const array = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 26,
    id: 1,
  },
  {
    firstName: 'Anna',
    lastName: 'Smith',
    age: 35,
    id: 2,
  },
  {
    firstName: 'Peter',
    lastName: 'Jones',
    age: 29,
  },
  {
    firstName: 'Jack',
    lastName: 'White',
    age: 27,
    id: 5,
  },
  {
    firstName: 'Kate',
    lastName: 'Black',
    age: 30,
  },
]

array.forEach((person) => {
  if (person.hasOwnProperty('id')) {
    delete person.id
  }
})

console.log('The updated array is:', array)
