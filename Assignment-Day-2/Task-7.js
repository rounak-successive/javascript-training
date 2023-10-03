//7. All of the above questions from 3-6 needs to be done with arrow functions also

const firstNumber = 10,
  secondNumber = 5

// task 3: Write a function expression that takes in another function as an argument
const greet = () => {
  return 'Hello'
}

const greetPerson = (name, func) => {
  console.log(func(), name)
}

greetPerson('Rounak', greet)

//task 4:Write a function expression that takes in a number and returns its square.
const square = (num) => {
  return num * num
}

console.log('Square of the first number is :', square(firstNumber))

//task 5:Write a function expression that takes in two numbers and returns their sum.

const sum = (a, b) => {
  return a + b
}

console.log('Sum of the 2 numbers is :', sum(firstNumber, secondNumber))

//task 6: Write a function expression that takes in a number and returns true if it's even and false if it's odd.

const isEven = (num) => {
  if (num % 2 === 0) return true
  return false
}

console.log('Second Number is', isEven(secondNumber) ? 'even' : 'odd')
