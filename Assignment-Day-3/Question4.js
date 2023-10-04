// Write a program to print all even number first and then all odd numbers

function printEvenAndOddNumbers(range) {
  let evenNumbers = 'The even numbers are :',
    oddNumbers = 'The odd numbers are:'
  for (let i = 0; i <= range; i += 2) {
    evenNumbers = evenNumbers + ' ' + i
  }
  for (let i = 1; i <= range; i += 2) {
    oddNumbers = oddNumbers + ' ' + i
  }
  console.log(evenNumbers)
  console.log(oddNumbers)
}

const range = 100
printEvenAndOddNumbers(range)
