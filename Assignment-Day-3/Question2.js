// Write a program to display following output as shown in figure

// 1
// 2 3
// 4 5 6
// 7 8 9 10

function displayPattern1() {
  let cur = 1
  for (let i = 1; i <= 4; i++) {
    let output = ''
    for (let j = 1; j <= i; j++) {
      output = output + cur + ' '
      cur++
    }
    console.log(output)
  }
}

console.log('The first pattern is :')
displayPattern1()

// 1
// 2 2
// 3 3 3
// 4 4 4 4

function displayPattern2() {
  for (let i = 1; i <= 4; i++) {
    let output = ''
    for (let j = 1; j <= i; j++) {
      output = output + i + ' '
    }
    console.log(output)
  }
}

console.log('The second pattern is :')
displayPattern2()

// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function displayPattern3() {
  for (let i = 5; i > 0; i--) {
    let output = ''
    for (let j = 1; j <= i; j++) {
      output = output + j + ' '
    }
    console.log(output)
  }
  for (let i = 2; i <= 5; i++) {
    let output = ''
    for (let j = 1; j <= i; j++) {
      output = output + j + ' '
    }
    console.log(output)
  }
}

console.log('The third pattern is :')
displayPattern3()
