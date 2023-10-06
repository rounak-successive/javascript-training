// Write a program to sort an array (bubble sort)

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1]
        array[j + 1] = array[j]
        array[j] = temp
      }
    }
  }
}

const array = [1, 4, 2, 5, 3]
bubbleSort(array)
console.log('The sorted array is:', array)
