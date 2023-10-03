//3. Write a function expression that takes in another function as an argument
function greet() {
  return 'Hello'
}

function greetPerson(name, func) {
  console.log(func(), name)
}

greetPerson('rounak', greet)
