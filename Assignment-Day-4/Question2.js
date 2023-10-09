// Write a program to reverse a string ("Hello John" => "olleH nhoJ")

function reverseString(string) {
  let newString = ''
  for (let i = string.length - 1; i >= 0; i--) {
    newString = newString + string[i]
  }
  return newString
}

const string = 'Hello John      Doe'
let words = string.split(' ')
for (let i = 0; i < words.length; i++) {
  words[i] = reverseString(words[i])
}
const output = words.join(' ')
console.log('The reversed string is:', output)
