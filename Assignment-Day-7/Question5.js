//  Write a program to implement a Promise-based task queue, that processes tasks in a specified order, with a specified concurrency limit

class PromiseQueue {
  constructor(limit) {
    this.limit = limit
    this.priorityQueue = []
    this.running = 0
  }

  // use binary search to find the appropiate position to insert the new task in the priority queue.
  findInsertIndex(priority) {
    let n = this.priorityQueue.length
    let low = 0,
      high = n - 1
    let ans = n

    while (low <= high) {
      let mid = Math.floor((low + high) / 2)
      if (this.priorityQueue[mid].priority > priority) {
        ans = mid
        high = mid - 1
      } else {
        low = mid + 1
      }
    }
    return ans
  }

  runTask(task, priority) {
    return new Promise((resolve, reject) => {
      const taskData = { task, resolve, reject, priority }
      const insertIndex = this.findInsertIndex(priority)
      this.priorityQueue.splice(insertIndex, 0, taskData) // insert the new task into the appropiate position
      this.processQueue()
    })
  }

  // process the tasks present in the Queue
  processQueue() {
    if (this.running >= this.limit || this.priorityQueue.length === 0) return

    this.running++
    const { task, resolve, reject } = this.priorityQueue.shift()

    task()
      .then((result) => resolve(result))
      .catch((error) => reject(error))
      .finally(() => {
        this.running--
        this.processQueue()
      })
  }
}

// Usage Example
const concurrencyLimit = 3,
  delay = 1000,
  promiseQueue = new PromiseQueue(concurrencyLimit)

function createTask(taskNumber, delay) {
  return () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(`Task ${taskNumber} result `)
      }, delay)
    })
}

for (let i = 1; i <= 8; i++) {
  let priority = i % 3

  // Here the tasks the executed on basis of their priority and but execution can only be done after task is created.
  promiseQueue
    .runTask(createTask(i, delay), priority)
    .then((res) => console.log(res))
}
