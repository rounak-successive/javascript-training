// Write a program to concatenate an input of array of arrays

function concatArray(array) {
  return array.flat()
}

const inputArray = [[1, 2], 3, 4, [5, 6, 7, 8]],
  output = concatArray(inputArray)
console.log('The desired array is:', output)
