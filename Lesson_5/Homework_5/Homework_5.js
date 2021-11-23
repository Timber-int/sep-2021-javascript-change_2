// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
console.log('-------------------------------------------');

const func1 = (a, b) => {
    let s;
    s = a * b;

    return s;
};

console.log(func1(5, 6));
// - створити функцію яка обчислює та повертає площу кола
console.log('-------------------------------------------');

const func2 = (r) => {
    let s;
    s = Math.PI * Math.pow(r, 2);

    return s;
};

console.log(func2(5));
// - створити функцію яка обчислює та повертає площу циліндру
console.log('-------------------------------------------');

const func3 = (r, h) => {
    let square;

    square = (2 * Math.PI * r * h) + (2 * Math.PI * Math.pow(r, 2));

    return square;
};

console.log(func3(10, 3));
// - створити функцію яка приймає масив та виводить кожен його елемент
console.log('-------------------------------------------');

const func4 = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

func4([1, 2, 3, 4, 5]);
// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
document.write('-------------------------------------------');

const func5 = (text) => {
    document.write(`<p>${text}</p>`);
}

func5('Hello');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
document.write('-------------------------------------------');

const func6 = (text) => {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}

func6('Word');
// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
console.log('-------------------------------------------');

const func7 = (li, text) => {

    document.write(`<ul>`);
    for (let i = 0; i < li; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);

}

func7(7, 'JS');
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
console.log('-------------------------------------------');

const func8 = (array) => {
    for (let i = 0; i < array.length; i++) {
        console.log(i + 1, array[i]);
    }
}

func8(['1', 2, '3', true, false, 4, Boolean(4), Boolean({}), 'false', 0]);
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
console.log('-------------------------------------------');

const func9 = (array) => {
    for (let i = 0; i < array.length; i++) {
        document.write(`<div>${array[i].id} ${array[i].name} ${array[i].age}</div>`);
    }
}

func9([
    {id: 1, name: 'Tim', age: 10},
    {id: 2, name: 'Bim', age: 40},
    {id: 3, name: 'Jim', age: 44}
])