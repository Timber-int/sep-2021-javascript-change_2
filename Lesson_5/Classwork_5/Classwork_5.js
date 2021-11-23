// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
console.log('------------------------------------------');
const func1 = (num1, num2, num3) => {

    if (num1 <= num2 && num1 <= num3) {
        return num1
    } else if (num2 <= num1 && num2 <= num1) {
        return num2
    } else return num3;
}

console.log(func1(6, -1, 1));
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
console.log('------------------------------------------');
const func2 = (num1, num2, num3) => {

    if (num1 >= num2 && num1 >= num3) {
        return num1
    } else if (num2 >= num1 && num2 >= num1) {
        return num2
    } else return num3;
}

console.log(func2(-10, 6, 4));
// - створити функцію яка повертає найбільше число з масиву
console.log('------------------------------------------');

const func3 = (array) => {

    let maxElem = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] >= maxElem) {
            maxElem = array[i];
        }
    }

    return maxElem;
}

console.log(func3([-10, 6, 999, 12, 4, 6, 74]));
// - створити функцію яка повертає найменьше число з масиву
console.log('------------------------------------------');

const func4 = (array) => {

    let minElem = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] <= minElem) {
            minElem = array[i];
        }
    }

    return minElem;
}

console.log(func4([-10, 6, 999, -12, 4, 6, 74]));
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
console.log('------------------------------------------');

const func5 = (array) => {

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

console.log(func5([1, 2, 10]));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
console.log('------------------------------------------');

const func6 = (array) => {

    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum / array.length;
}

console.log(func6([1, 2, 3, 4, 5]));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
console.log('------------------------------------------');

const func7 = (...array) => {

    let minElem = array[0];
    let maxElem = array[0];

    for (let i = 0; i < array.length; i++) {
        if (minElem <= array[i]) {
            minElem = array[i]
        } else if (maxElem >= array[i]) {
            maxElem = array[i]
        }
    }

    console.log(maxElem);

    return minElem;
}

console.log(func7(1, 27, 3, -4, 55, 6, -7, 8, 9, 10));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
console.log('------------------------------------------');

const func8 = (size) => {
    let array = [];
    let number;

    for (let i = 0; i < size; i++) {
        number = Math.floor(Math.random() * 100);
        array[i] = number;
    }

    return array;
}

console.log(func8(20));
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit -
// аргумент, який характеризує кінцеве значення діапазону.
console.log('------------------------------------------');

const func9 = (limit) => {
    let array = [];
    let number;

    for (let i = 0; i < limit; i++) {
        number = Math.floor(Math.random() * 10);
        array[i] = number;
    }

    return array;
}

console.log(func9(5));
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
console.log('------------------------------------------');

const func10 = (array) => {

    let newArray = [];

    for (let i = 0, j = array.length - 1; i < array.length; i++, j--) {
        newArray[j] = array[i];
    }

    return newArray;
}

console.log(func10([1, 2, 3]));