// Write a program to find index of duplicate elements in an array

function findDuplicates(array) {
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
      output = output + key + ':' + map[key] + '\n'
    }
  }

  return output
}

const inputArray = [1, 2, 1, 4, 3, 2],
  output = findDuplicates(inputArray)
console.log('The duplicate indexes for the various elements are : \n' + output)
