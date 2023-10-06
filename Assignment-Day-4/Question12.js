// Write a program to display intersection of two array

function getIntersection(inputArray1, inputArray2) {
  let output = [],
    array1 = inputArray1,
    array2 = inputArray2
  if (inputArray2.length < inputArray1.length) {
    array1 = inputArray2
    array2 = inputArray1
  }
  array1.forEach((element) => {
    if (array2.includes(element)) output.push(element)
  })
  return output
}

const inputArray1 = [2, 28, 75, 3, 1, 10],
  inputArray2 = [2, 3, 4, 5],
  output = getIntersection(inputArray1, inputArray2)
console.log('The intersection of the 2 arrays is:', output)
