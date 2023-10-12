// Create a function that fetches data from multiple APIs in parallel and then performs some operation on the combined data, using async/await.

async function fetchData(url) {
  return await fetch(url)
    .then((res) => res.json())
    .catch((error) => console.log(error))
}

async function handleMultipleFetches() {
  const urls = [
    'https://api.coindesk.com/v1/bpi/currentprice.json',
    'https://www.boredapi.com/api/activity',
    'https://official-joke-api.appspot.com/random_joke',
    'https://randomuser.me/api/',
  ]

  try {
    const results = await Promise.all(
      urls.map((url) => {
        return fetchData(url)
      })
    )
    return results
  } catch (error) {
    console.log(error)
  }
}

handleMultipleFetches()
  .then((results) => {
    results.forEach((result, key) => {
      console.log(`Output of Api call ${key} is `, result)
    })
  })
  .catch((error) => {
    console.error('An error occurred:', error)
  })
