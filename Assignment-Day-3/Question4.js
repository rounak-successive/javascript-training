// Write a program to print all even number first and then all odd numbers

function printEvenAndOddNumbers(numberOfTerms) {
  let evenNumbers = 'The even numbers are :',
    oddNumbers = 'The odd numbers are:'
  for (let i = 1; i <= numberOfTerms; i++) {
    evenNumbers = evenNumbers + ' ' + i * 2
    oddNumbers = oddNumbers + ' ' + (i * 2 - 1)
  }

  console.log(evenNumbers)
  console.log(oddNumbers)
}

const numberOfTerms = 3
printEvenAndOddNumbers(numberOfTerms)
