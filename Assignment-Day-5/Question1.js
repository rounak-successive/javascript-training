// Write a program to iterate over object.

const person = {
  firstName: 'Rounak',
  lastName: 'Dwary',
  age: 22,
  city: 'Noida',
  company: 'Successive Digital',
  mobileNo: 1234567890,
  email: 'rounak.dwary@successive.tech',
}
for (let key in person) {
  console.log(key + ':', person[key])
}
