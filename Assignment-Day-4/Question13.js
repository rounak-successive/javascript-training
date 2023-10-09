// Write a program to return inverse of an array

function inverse(array) {
  let copyArray = []
  for (let i = 0; i < array.length; i++) {
    copyArray[array[i]] = i
  }
  return copyArray
}

const inputArray = [1, 2, 3, 4, 5, 0],
  output = inverse(inputArray)
console.log('The inverse of the array is:', output)
