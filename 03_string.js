// #1 String
// const name = 'Daniil'
// const age = 21

// function getAge() {
//     return age
// }

// const output = 'Привет, меня зовут '  + name + ' и мой возраст: ' + age + ' лет. '
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 30 ? 'A' : 'B'} лет.`
// console.log(output)
// const output = `
// <div>This is div</div>
// <p>this is p</p>
// `
// console.log(output)

// const name = 'Daniil'
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('ani'))
// console.log(name.startsWith('Dan'))
// console.log(name.startsWith('dan'))
// console.log(name.endsWith('iil'))
// console.log(name.endsWith('iil1'))
// console.log(name.repeat(3))
// const string = '       password       '
// console.log(string.trim())
// console.log(string.trimRight())
// console.log(string.trimLeft())

function logPerson(s, name, age)  {
   if (age < 0) {
       age = 'Ещё не родился'
   }
return `${s[0]}${name}${s[1]}${age}${s[2]}`
}
const personName = 'Daniil'
const personName2 = 'Victor'
const personAge = 21
const personAge2 = -10

const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`
console.log(output)
console.log(output2)
