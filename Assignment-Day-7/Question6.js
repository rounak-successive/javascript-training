// Implement a function that returns a resolved Promise after a specified delay using async/await.

async function fetchData(delay) {
  return await new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve('Data fetched successfully')
      }, delay)
    } catch (error) {
      reject(error)
    }
  })
}

fetchData(1000)
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err)
  })
