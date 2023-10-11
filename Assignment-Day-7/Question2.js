// Give an example of using multiple callback functions in a single function in JavaScript

const callbackFunction1 = () => {
  setTimeout(() => console.log('1st callback function called'), 1000)
}

const callbackFunction2 = () => {
  setTimeout(() => console.log('2nd callback function called'), 3000)
}

function callingFunction(callbackFunction1, callbackFunction2) {
  console.log('Inside calling Function')
  callbackFunction1()
  callbackFunction2()
}

callingFunction(callbackFunction1, callbackFunction2)
