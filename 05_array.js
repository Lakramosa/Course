const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
// const people = [
//     {name: 'Daniil', budget: 4200},
//     {name: 'Elena', budget: 3500},
//     {name: 'Victoria', budget: 1700}
// ]
const fib = [1, 1, 2, 3, 5, 8, 13]

// Function
function addItemToEnd() {

}

//Method
// cars.push('Рено') // В конец
// cars.unshift('Волга') // В начало
// cars.shift() // Удаляет первый элемент
// cars.pop() // Удаляет последний элемент
// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)

// console.log(cars.reverse())  // Переворачивает массив
// console.log(cars)

// const index = cars.indexOf('БМВ')
// cars[index] = 'Porsche'
// console.log(cars)

// let findedPerson
// for (const person of people) {
//     if (person.budget === 3500) {
//         findedPerson = person
//     }
// }
// console.log(findedPerson);

// Задача: поиск в объекте
// const index = people.findIndex(function(person) {
// return person.budget === 3500
// })
// console.log(people[index]);

// const person = people.find(function(person) {
//     return person.budget === 3500
//     })
//     console.log(person);

// const person = people.find(person => person.budget === 3500)
// console.log(person);
// Конец задачи

// console.log(cars.includes('Мазда'))  // Есть ли такой элемент

// const upperCaseCars = cars.map(car => car.toUpperCase())
// console.log(upperCaseCars);

// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
// const pow2Fib = fib.map(pow2).map(Math.sqrt)
// console.log(pow2Fib);

// const pow2Fib = fib.map(num => num ** 2)
// console.log(pow2Fib);

// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib);
// console.log(filteredNumbers);

// Задача №1 Перевернуть текст
// const text = 'Привет, мы изучаем JS'
// const reverseText = text.split('').reverse().join("")
// console.log(reverseText)

const people = [
    {name: 'Daniil', budget: 4200},
    {name: 'Elena', budget: 3500},
    {name: 'Victoria', budget: 1700}
]

// Задача №2 Сложить бюджет если он > 2000
const allBudget = people
.filter(person => person.budget > 2000)
.reduce(function(acc, person) {
    acc += person.budget
    return acc
}, 0)
console.log(allBudget);
