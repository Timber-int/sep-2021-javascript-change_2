// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
// let array1 = [1, 2, 3, 4, 5];
// let array2 = ['1', '2', '3', '4', '5'];
// let array3 = [true, false, Boolean({}), Boolean(undefined), Boolean('')];
// let array4 = [1, '2', true, 3, false];
//
// console.log(array1);
// console.log(array2);
// console.log(array3);
// console.log(array4);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

// let array1= [];
// array1[0]=13;
// array1[1]='13';
// array1[2]=true;
// array1[3]=false;
// array1[4]=NaN;
// array1[5]=Object(23);
// array1[6]=Boolean(21);
// array1[7]='Hey';
// array1[8]='No';
// array1[9]=null;
// array1[10]=0.5;
//
// console.log(array1);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<div>Hello</div>`);
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

for (let i = 0; i < 10; i++) {
    document.write(`<br><div>${i}Hello</div>`);
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;

while (i < 20) {
    document.write(`<h1>Hello</h1>`);
    i++;
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

{
    let i = 0;

    while (i < 20) {
        document.write(`<h1>${i}Hello</h1>`);
        i++;
    }
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

{
    console.log('------------------------------------------------');
    let array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = 0; i < array1.length; i++) {
        console.log(array1[i]);
    }
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
{
    console.log('------------------------------------------------');
    let array1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    for (let i = 0; i < array1.length; i++) {
        console.log(array1[i]);
    }
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
{
    console.log('------------------------------------------------');
    let array1 = ['1', 2, true, NaN, undefined, '6', 7, false, '9', {name: 'Jon'}];

    for (let i = 0; i < array1.length; i++) {
        console.log(array1[i]);
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
{
    console.log('------------------------------------------------');
    let array1 = ['1', 2, '3', true, false, 4, Boolean(4), Boolean({}), 'false', 0];

    for (let i = 0; i < array1.length; i++) {
        if (typeof array1[i] === "boolean") {
            console.log(i, array1[i]);
        }
    }
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
{
    console.log('------------------------------------------------');
    let array1 = ['1', 2, '3', true, false, 4, Boolean(4), Boolean({}), 'false', 0];

    for (let i = 0; i < array1.length; i++) {
        if (typeof array1[i] === "number") {
            console.log(i, array1[i]);
        }
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
{
    console.log('------------------------------------------------');
    let array1 = ['1', 2, '3', true, false, 4, Boolean(4), Boolean({}), 'false', 0];

    i = 0;
    while (i < array1.length) {
        if (typeof array1[i] === 'string') {
            console.log(i, array1[i]);
        }
        i++;
    }
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами)
// через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
{
    console.log('------------------------------------------------');
    let array1 = ['5', 2, Boolean(''), true, false, 4, NaN, undefined, 'false', 0];

    for (let i = 0; i < array1.length; i++) {
        console.log(array1[i])
    }
}

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log('------------------------------------------------');
for (let i = 0; i < 10; i++) {
    document.write(`${i}`);
    console.log(i);
}
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
console.log('------------------------------------------------');
for (let i = 0; i < 100; i++) {
    document.write(`<br>${i}`);
    console.log(i);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
console.log('------------------------------------------------');
for (let i = 0; i < 100; i += 2) {
    document.write(`<br>${i}`);
    console.log(i);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log('------------------------------------------------');
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        document.write(`<br>${i}`);
        console.log(i);
    }
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log('------------------------------------------------');
for (let i = 0; i < 100; i++) {
    if (i % 2 !== 0) {
        document.write(`<br>${i}`);
        console.log(i);
    }
}