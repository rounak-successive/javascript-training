// Write a program to remove duplicate charecters from a string ("Hello Yellow" => "Helo Yw")

function removeDuplicates(string) {
  let set = new Set(),
    output = ''
  for (let i = 0; i < string.length; i++) {
    if (!set.has(string[i]) || string[i] === ' ') {
      output = output + string[i]
      set.add(string[i])
    }
  }
  return output
}

const string = 'Hello Yellow',
  output = removeDuplicates(string)
console.log('The desired output is:', output)
