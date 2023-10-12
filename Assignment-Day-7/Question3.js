// Convert a callback-based API to a Promise-based API (function fetchData(callback) { setTimeout(() => { callback(null, "Data fetched successfully"); }, 1000); })

function fetchData() {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve('Data fetched successfully')
      }, 1000)
      // add throw new Error('error') to check for reject case.
    } catch (error) {
      reject(error)
    }
  })
}

const output = fetchData()
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err)
  })
