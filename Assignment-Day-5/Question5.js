/* Write a program flattenObject that takes an object with nested properties and returns a flat object with the nested properties transformed into dot-separated properties. The function should handle nested objects and arrays.
const obj = {
   a: 1,
   b: { c: 2, d: [3, 4] }
};
Output: { 'a': 1, 'b.c': 2, 'b.d.0': 3, 'b.d.1': 4 }
*/

function flattenObject(object, keySoFar, output) {
  if (object === null || object instanceof Date) {
    output[keySoFar] = object
  }

  for (let key in object) {
    const newKey = keySoFar.length > 0 ? keySoFar + '.' + key : key
    if (typeof object[key] === 'object') {
      flattenObject(object[key], newKey, output)
    } else {
      output[newKey] = object[key]
    }
  }
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
  },
  flatObject = {}
flattenObject(object, '', flatObject)
console.log('The flattened object is:', flatObject)
