// Write a program to display Diamond Pattern

let space = 4,
  stars = 1
for (let i = 1; i <= 9; i++) {
  let row = ''
  for (let j = 1; j <= space; j++) {
    row = row + ' '
  }
  for (let j = 1; j <= stars; j++) {
    row = row + '*' + ' '
  }
  if (i >= 5) {
    stars--
    space++
  } else {
    space--
    stars++
  }
  console.log(row)
}
