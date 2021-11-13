// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor).
// Скласти результат цих чисел в змінній result.

let arr = [];
let result = 0;
let number = 0;

for (let i = 0; i < 10; i++) {
    number = Math.floor(Math.random() * 100);

    arr[i] = number;
    result += number;

}
console.log(result)
console.log(arr)


// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр

let book = {
    name: 'Harry Potter',
    pageNumber: 400,
    genre: 'Adventures'
}
console.log(book);

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори

let book1 = {
    name: 'Harry Potter',
    pageNumber: 400,
    genre: 'Adventures',
    authors: ['Joanne Rowling']
}

console.log(book1);

// 4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори.
// Вивести кожну книгу як окремий об'єкт

let book2 = [
    {name: 'Harry Potter', genre: 'Adventures', pageNumber: 400, authors: ['Joanne Rowling']},
    {name: 'Harry Potter', genre: 'Adventures', pageNumber: 400, authors: ['Joanne Rowling']},
    {name: 'Harry Potter', genre: 'Adventures', pageNumber: 400, authors: ['Joanne Rowling']},
    {name: 'Harry Potter', genre: 'Adventures', pageNumber: 400, authors: ['Joanne Rowling']},
]

for (let book of book2) {
    console.log(book)
}
console.log('---------------------------');
book2.forEach(book => console.log(book));
console.log('---------------------------');
console.log(book2[0], book2[1], book2[2], book2[3])

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23;
let width = 10;

let s = height * width;
console.log('Square', s);


// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.

let heightC = 10;
let dC = 4;
let r = dC / 2;

let v = Math.PI * Math.pow(r, 2) * heightC;

console.log('Volume', v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію
// Math.pow (число, ступінь) або оператор зведення в ступінь **).

let n = 3;
let m = 4;

let k = Math.sqrt(n ** 2 + m ** 2);
console.log('Гіпотенуза', k);



