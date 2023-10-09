// Write a program to reverse an array

function reverse(array) {
  const n = array.length
  for (let i = 0; i < n / 2; i++) {
    const temp = array[n - 1 - i]
    array[n - 1 - i] = array[i]
    array[i] = temp
  }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8]
reverse(array)
console.log('The reversed array is:', array)
