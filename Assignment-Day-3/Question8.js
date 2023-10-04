//  Write a program to dispaly number from 1-20 using all types of loops

let output = ''

// for loop
for (let i = 1; i <= 20; i++) {
  output = output + i + ' '
}

console.log('The numbers printed using for loop are: ' + output)

// while loop
let i = 1
output = ''
while (i <= 20) {
  output = output + i + ' '
  i++
}

console.log('The numbers printed using while loop are: ' + output)

// do while loop

i = 1
output = ''
do {
  output = output + i + ' '
  i++
} while (i <= 20)

console.log('The numbers printed using do-while loop are: ' + output)

// All the below loops use an Array/Object for iteration
let arr = new Array()
for (let i = 1; i <= 20; i++) {
  arr.push(i)
}

// for-in loop
output = ''
for (let i in arr) {
  output = output + arr[i] + ' '
}

console.log('The numbers printed using for-in loop are: ' + output)

// forEach loop
output = ''
arr.forEach((i) => {
  output = output + i + ' '
})

console.log('The numbers printed using forEach loop are: ' + output)

//for-of loop
output = ''
for (let i of arr) {
  output = output + i + ' '
}

console.log('The numbers printed using for-of loop are: ' + output)
