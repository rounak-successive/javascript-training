// Write a program to give a random output between 1 to 10
function randomGenerator() {
  return Math.ceil(Math.random() * 10)
}

var prev = 0
for (let i = 0; i < 10; i++) {
  let ans = randomGenerator()
  if (ans != prev) {
    prev = ans
  } else {
    while (ans == prev) ans = randomGenerator()
  }
  console.log(ans)
}
