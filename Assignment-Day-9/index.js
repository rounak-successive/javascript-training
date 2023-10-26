// 3.create a new folder named 'math' and create a file math.js. In math.js, define two functions:
// a. add(a, b): takes two numbers as arguments and returns their sum.
// b. subtract(a, b): takes two numbers as arguments and returns their difference.
// create a new file index.js and just export those functions and then use those function in any of the file
import { add, subtract } from './Math/Math.js'

const a = 10,
  b = 5
const sum = add(a, b),
  difference = subtract(a, b)

console.log(`The sum of the 2 numbers ${a} and ${b} is: ${sum}`)
console.log(`The difference of the 2 numbers ${a} and ${b} is: ${difference}`)
