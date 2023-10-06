//  Write a program to give count of variables in a string ("abcabcdabbcc" => "a3b4c4d1")

function giveCount(string) {
  let map = {},
    output = ''
  for (let i = 0; i < string.length; i++) {
    if (string[i] in map) map[string[i]] += 1
    else map[string[i]] = 1
  }
  for (let c in map) {
    output = output + c + map[c]
  }
  return output
}

const string = 'abcabcdabbcc',
  output = giveCount(string)
console.log('The desired output is:', output)
