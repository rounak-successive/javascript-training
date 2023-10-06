// Write a program to remove duplicate elements from an array

function removeDuplicates(array) {
  // return [...new Set(array)] -- alternate method
  let set = new Set()
  for (let i = 0; i < array.length; i++) {
    if (set.has(array[i])) {
      array.splice(i, 1)
    } else {
      set.add(array[i])
    }
  }
}

const array = [1, 2, 1, 4, 3, 2]
removeDuplicates(array)
console.log('The desired array  is:', array)
