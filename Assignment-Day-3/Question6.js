// Write a program to display prime numbers from 1 to 50

function isPrime(number) {
  let i = 2
  if (number === 1) return false
  while (i < number) {
    if (number % i === 0) return false
    i++
  }
  return true
}
function printPrimeNumbers() {
  let currentNo = 1,
    primeNumbers = 'The prime numbers between 1 and 50 are:'
  while (currentNo <= 50) {
    if (isPrime(currentNo)) primeNumbers = primeNumbers + ' ' + currentNo
    currentNo++
  }
  return primeNumbers
}
console.log(printPrimeNumbers())
