// Write a program to perform functionality of a calculator (add,sub,multiply,divide)

function calculator(firstOperand, secondOperand, operation) {
  switch (operation) {
    case 'add':
      return firstOperand + secondOperand
    case 'subtract':
      return firstOperand - secondOperand
    case 'multiply':
      return firstOperand * secondOperand
    case 'divide':
      return firstOperand / secondOperand

    default:
      return 'Invalid Operation'
  }
}

let firstOperand = 10,
  secondOperand = 20,
  operation = 'divide',
  answer = calculator(firstOperand, secondOperand, operation)
console.log(
  `The ${operation} operation on ${firstOperand} and ${secondOperand} gives: ` +
    answer
)
