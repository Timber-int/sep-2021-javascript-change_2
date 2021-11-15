// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
{
    let array = [];

    for (let i = 2; i < 102; i++) {
        if (i % 2 === 0) {
            array.push(i);
        }
    }
    console.log(array);
}
//     b. заповнити його 50 непарними числами за допомоги циклу.
{
    let array = [];

    for (let i = 1; i < 100; i++) {
        if (i % 2 !== 0) {
            array.push(i);
        }
    }
    console.log(array);
}
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
{
    let array = [];
    let number = 0;

    for (let i = 0; i < 20; i++) {
        number = Math.floor(Math.random() * 100);

        array[i] = number;
    }
    console.log(array);
}
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
{
    let array = [];

    for (let i = 0; i < 20; i++) {
        let number = Math.floor(Math.random() * (732 - 8) + 8);

        array[i] = number;
    }
    console.log(array);
}
// 2. Вивести за допомогою console.log кожен третій елемен
{
    console.log('--------------------------------------------------');
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    for (let i = 1; i < array.length; i++) {
        if (i % 3 === 0) {
            console.log(array[i]);
        }
    }
}
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
{
    console.log('--------------------------------------------------');
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    for (let i = 1; i < array.length; i++) {
        if (i % 3 === 0 && i % 2 === 0) {
            console.log(array[i]);
        }
    }
}
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
{
    console.log('--------------------------------------------------');
    let newArray = [];
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
    for (let i = 1; i < array.length; i++) {
        if (i % 3 === 0 && i % 2 === 0) {
            newArray.push(array[i]);
        }
    }
    console.log(newArray);
}
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
{
    console.log('--------------------------------------------------');
    let array = [1, 2, 3, 5, 7, 9, 56, 8, 67];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(array[i - 1]);
        }
    }
}
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
{
    console.log('--------------------------------------------------');
    let array = [100, 250, 50, 168, 120, 345, 188];
    let sum = 0;
    let middleCheck = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        middleCheck = sum / array.length;
    }
    console.log(middleCheck);
}

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
{
    console.log('--------------------------------------------------');
    let array = [];
    let newArray = [];
    let number = 0;
    let value;

    for (let i = 0; i < 10; i++) {
        number = Math.floor(Math.random() * 100);

        array[i] = number;

        value = array[i] * 5
        newArray.push(value);
    }
    console.log('array-->', array);
    console.log('newArray-->', newArray);
}
// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
{
    console.log('--------------------------------------------------');
    let newArray = [];

    let array = ['1', 2, '3', true, false, 4, Boolean(4), Boolean({}), 'false', 0];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            newArray.push(array[i]);
        }
    }
    console.log('array-->', array);
    console.log('newArray-->', newArray);
}
//
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
console.log('******************************************************');

let usersWithCities = usersWithId;


for (let user of usersWithId) {
    for (let cityUser of citiesWithId) {
        if (user.id === cityUser.user_id) {
            user.address = cityUser;
        }
    }
}
console.log(usersWithCities);


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
{
    console.log('******************************************************');
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(array[i]);
        }
    }
}
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

{
    console.log('******************************************************');
    let newArray = [];

    let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    console.log(newArray);
}
//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
{
    console.log('******************************************************');
    let array = ['a', 'b', 'c'];
    let string = '';

    for (let i = 0; i < array.length; i++) {
        string += array[i];
    }
    console.log(string)
}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
{
    console.log('******************************************************');
    let array = ['a', 'b', 'c'];
    let string = '';

    let i = 0;
    while (i < array.length) {
        string += array[i];
        i++;
    }
    console.log(string);
}
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
{
    console.log('******************************************************');
    let array = ['a', 'b', 'c'];
    let string = '';

    for (let arrayElem of array) {
        string += arrayElem;
    }
    console.log(string);
}
