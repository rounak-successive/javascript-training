// Write a program to display the twice of a number starting from 2 and end at 4096 (2, 4, 8, 16, ..... 4096)

let current = 2,
  end = 4096,
  desiredNumbers = 'The desired numbers are:'
while (current <= end) {
  desiredNumbers = desiredNumbers + ' ' + current
  current *= 2
}

console.log(desiredNumbers)
