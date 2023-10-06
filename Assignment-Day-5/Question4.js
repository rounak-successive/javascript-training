// Write a program deepClone that takes an object as input and returns a deep copy of that object. The function should handle nested objects and arrays.
function deepCopy(object) {
  let copy
  if (object === null || typeof object !== 'object') {
    return object
  }
  if (object instanceof Date) {
    copy = new Date(object)
    return copy
  }

  if (object instanceof Array) {
    copy = []
    for (let i = 0; i < object.length; i++) {
      copy[i] = deepCopy(object[i])
    }
    return copy
  }
  copy = {}
  for (let key in object) {
    copy[key] = deepCopy(object[key])
  }
  return copy
}

const object = {
  firstName: 'Rounak',
  lastName: 'Dwary',
  age: 22,
  id: 1,
  socialMedia: {
    facebook: 'rounak',
    linkedIn: 'rdrounak',
    github: 'rounak-successive',
  },
  mobileNo: 1234567890,
  taskAssigned: [[1], 2, 3, 4, 5],
  date: new Date(),
  fun: () => {
    console.log('hello')
  },
}

const copyObject = deepCopy(object)

//changes made to the copy object
copyObject.lastName = 'Bharadwaj'
copyObject.taskAssigned[0].push(6)
copyObject.date.setDate(9)
copyObject.fun = () => {
  console.log('hi')
}
copyObject.socialMedia.facebook = 'rd'

console.log(object, copyObject)
