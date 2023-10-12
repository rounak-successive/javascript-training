// Create a function that performs multiple asynchronous operations in parallel using async/await and waits for all of them to complete before returning the results.

async function createIsEvenFunction(num) {
  return new Promise((resolve) => {
    let result = ''
    if (num % 2 === 0) result = 'Number is Even'
    else result = 'Number is odd'
    setTimeout(() => resolve(result), 1000)
  })
}

async function handleMultipleAsynchronousOperations() {
  const asyncFunctions = []
  for (let i = 0; i <= 20; i++) {
    asyncFunctions.push({ func: createIsEvenFunction, num: i })
  }
  try {
    const results = await Promise.all(
      asyncFunctions.map((operations) => {
        return operations.func(operations.num)
      })
    )
    return results
  } catch (error) {
    console.log(error)
  }
}

handleMultipleAsynchronousOperations()
  .then((results) => {
    console.log('All async operations completed:')
    console.log(results)
  })
  .catch((error) => {
    console.error('An error occurred:', error)
  })
