// Write a program to find sum of an array

function getSum(array) {
  let sum = 0
  array.forEach((element) => {
    sum += element
  })
  return sum
}

const array = [1, 3, 5, 9, 12],
  output = getSum(array)
console.log('The sum of the array is:', output)
