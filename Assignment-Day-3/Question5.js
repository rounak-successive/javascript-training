// Write a program to print all even number first and then all odd numbers using only one iteration

function printEvenAndOddNumbersWithOneIteration(range) {
  let evenNumbers = 'The even numbers are :',
    oddNumbers = 'The odd numbers are:'
  for (let i = 0; i <= range; i++) {
    if (i % 2 === 0) evenNumbers = evenNumbers + ' ' + i
    else oddNumbers = oddNumbers + ' ' + i
  }
  console.log(evenNumbers)
  console.log(oddNumbers)
}

const range = 100
printEvenAndOddNumbersWithOneIteration(range)
