// #1 Переменные
// const firstName = 'Daniil'
// const age = 21
// const isProgrammer = true

// const _ = 'private'
// const $ = 'some value'

// const if = 'mkef' // err
// const withNum5  = '5'
// const 5withNum = 5 // err

// #2 Мутирование
// console.log('Имя человека: ' + firstName + ', а возраст человека: ' + age )
// alert('Имя человека: ' + firstName + ', а возраст человека: ' + age )
// const lastName = prompt('Введите фамилию:')
// alert(firstName + ' ' + lastName)

// #3 Операторы
// let currentYear = 2021
// const birthYear = 2000

// const age = currentYear -  birthYear
// console.log(age)

// const a = 10
// const b = 5
// let c = 32

// c = c + a
// c += a
// c -= a

// console.log(a+b)
// console.log(a-b)
// console.log(a*b)
// console.log(a/b)
// console.log(++currentYear)
// console.log(--currentYear)
// console.log(c)

// #4 Типы данных
// const isProgrammer = true
// const name = 'Daniil'
// const age = 21
// let x

// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// #5 Приоритет операторов
// const fullAge = 21
// const birthYear = 2000
// const currentYear = 2021

// const isFullAge = (currentYear - birthYear) >= fullAge
// console.log(isFullAge)

// #6 Условные операторы
// const courseStatus = 'pending'

// if (courseStatus === 'ready') {
//     console.log('Курс готов')
// } else if (courseStatus === 'pending') {
//     console.log('Курс не готов')
// } else {
//     console.log('Курса нема')
// }

// const isReady = true

// if (isReady) {
//     console.log('Всё готово')
// } else {
//     console.log('Всё не готово')
// }

// Тернарное выражение
// isReady ? console.log('Всё готово') : console.log('Всё не готово')

// const num1 = 42  // number
// const num2 = '42' // string

// console.log(num1 === num2)

// #7 Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators

// #8 Функции
// function calculateAge(year) {
//     return 2021 - year
// }

// console.log(calculateAge(2000))
// console.log(calculateAge(2001))
// console.log(calculateAge(2002))

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)

//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' Сейчас имеет возраст ' + age)
//     } else {
//         console.log('Вообще-то это уже будущее')
//     }
// }

// logInfoAbout('Daniil', 2000)
// logInfoAbout('Daniil', 2022)

// #9 Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']
// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])

// cars[0] = 'Porsche'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// #10 Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche']

// for(let i = 0; i < cars.length; i++) {
// const car = cars[i]
// console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }

// #11 Объекты
const  person = {
    firstName: 'Daniil',
    lastName: 'Mashevskiy',
    year: 2000,
    languages: ['Ru', 'En', 'De'],
    hasWife: false,
    greet: function() {
        console.log('greet from person')
    }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasWife = true
person.isProgrammer = true
console.log(person)
person.greet()
