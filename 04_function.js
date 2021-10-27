// #1 Functions

// Function Declaration
// function greet(name) {
//     console.log('Привет - ', name)
// }

// Function Expression
// const greet2 = function greet2(name) {
//     console.log('Привет2 - ', name)
// }

// greet('Лена')
// greet2('Лена')

// console.log(typeof greet);
// console.dir(greet)

// #2 Анонимные функции
// let counter = 0
// const interval = setInterval(function() {
//     if (counter === 5) {
//     clearInterval(interval)  // ClearTimeOut
//     } else {
//  console.log(++counter)
//     }
// }, 1000)

// #3 Стрелочные функции
// function greet() {
//     console.log('Привет - ', )
// }

// const arrow = (name, age) => {
//     console.log('Привет - ', name, age)
// }

// const arrow2 = name => console.log('Привет - ', name)

// arrow2('Daniil')

// const pow2 = num => num ** 2
// console.log(pow2(5))

// #4 Параметры по умолчанию
// const sum = (a, b = 1) => a + b

// console.log(sum(41))

// function sumAll(...all) {
// let result = 0
// for (let num of all) {
//     result += num
// }
// return result
// }

// const res = sumAll(1, 2, 3, 4, 5, 6, 7)
// console.log(res)

// #5 Замыкание
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Daniil')
console.log(logWithLastName('Mashevskiy'))
console.log(logWithLastName('Kuznetsov'))