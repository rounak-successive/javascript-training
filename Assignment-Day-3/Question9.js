// Write a program to print fibonaaci series

function printFibonacci(range) {
  let prev = 0,
    cur = 1,
    i = 2,
    output = ''
  if (range >= 1) output = output + prev + ' '
  while (i <= range) {
    output = output + cur + ' '
    let temp = prev + cur
    prev = cur
    cur = temp
    i++
  }

  return output
}

const range = 6
console.log(
  `The  fibonaaci series till the ${range}th term is: ` + printFibonacci(range)
)
