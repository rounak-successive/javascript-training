// Write a program to sort an array (quick sort)

function partition(array, start, end) {
  let pivot = array[end]
  let i = start - 1
  for (let j = start; j < end; j++) {
    if (array[j] < pivot) {
      i++
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }
  i++
  array[end] = array[i]
  array[i] = pivot
  return i
}
function quickSort(array, start = 0, end = array.length - 1) {
  if (start > end) return
  let pivot = partition(array, start, end)
  quickSort(array, start, pivot - 1)
  quickSort(array, pivot + 1, end)
}

const array = [1, 4, 2, 5, 3]
quickSort(array)

console.log('The sorted array is:', array)
