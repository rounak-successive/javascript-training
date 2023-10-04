// Write a program to print fibonaaci series

function printFibonacci(range) {
  let first = 1,
    second = 0,
    i = 2,
    output = ''
  if (range >= 1) output = output + second + ' '
  while (i < range) {
    output = output + first + ' '
    let temp = first + second
    second = first
    first = temp
    i++
  }
  output = output + first + ' '
  return output
}

const range = 6
console.log(
  `The  fibonaaci series till the ${range}th term is: ` + printFibonacci(range)
)
