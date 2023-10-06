// Write a program to sort an array of object on the basis of age ({name:"John", age:26})

const array = [
  {
    firstName: 'John',
    lastName: 'Doe',
    age: 26,
  },
  {
    firstName: 'Anna',
    lastName: 'Smith',
    age: 35,
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
  },
  {
    firstName: 'Kate',
    lastName: 'Black',
    age: 30,
  },
]

array.sort((a, b) => {
  return a.age - b.age
})

console.log('The sorted array is: ', array)
