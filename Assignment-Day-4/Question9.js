// Write a program to find the last duplicate index in an array

function findLastDuplicateIndex(array) {
  let output = '',
    map = {}
  for (let i = 0; i < array.length; i++) {
    if (array[i] in map) {
      map[array[i]].push(i)
    } else {
      let temp = new Array()
      temp.push(i)
      map[array[i]] = temp
    }
  }

  for (let key in map) {
    if (map[key].length > 1) {
      output = output + key + ':' + map[key].pop() + '\n'
    }
  }

  return output
}

const inputArray = [1, 2, 1, 4, 3, 2],
  output = findLastDuplicateIndex(inputArray)
console.log(
  'The last duplicate indexes for the various elements are : \n' + output
)
