// Write a program to implement a Promise-based rate limiter, that limits the number of concurrent requests to a certain number

class RateLimiter {
  constructor(maxRequestPerSecond) {
    this.maxRequestPerSecond = maxRequestPerSecond
    this.curRequest = 0
  }

  fetchData() {
    return new Promise((resolve, reject) => {
      const timeTakenToExecute = 1000
      if (this.curRequest < this.maxRequestPerSecond) {
        this.curRequest++
        setTimeout(() => {
          this.curRequest--
        }, timeTakenToExecute)
        resolve('Data fetched successfully')
      } else {
        reject('Request Exhausted')
      }
    })
  }
}

const maxRequestPerSecond = 5,
  timeLimit = 5, // time in seconds after which the calling setInterval will stop.
  rateLimiter = new RateLimiter(maxRequestPerSecond),
  callingTimer = setInterval(() => {
    rateLimiter
      .fetchData()
      .then((res) => {
        console.log(res)
        return res
      })
      .catch((err) => {
        console.log(err)
      })
  }, 100)

// for breaking the Calling setInterval
setTimeout(() => {
  clearInterval(callingTimer)
}, 1000 * timeLimit)
