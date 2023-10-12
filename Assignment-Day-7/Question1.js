// Give an example of using a callback function to handle an asynchronous operation in JavaScript (Use any open api to make a call)

const url = 'https://catfact.ninja/fact'

const callbackFunction = (data) => {
  const { fact, length } = data
  console.log(
    `Here is an interesting fact abouts Cats in ${length} characters: \n${fact}`
  )
}

async function getData(url, callbackFunction) {
  await fetch(url)
    .then((res) => res.json())
    .then((data) => {
      callbackFunction(data)
    })
}

getData(url, callbackFunction)
