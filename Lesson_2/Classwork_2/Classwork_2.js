// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
//
// let number1 = prompt('Number1');
// let number2 = prompt('Number2');
//
// if (+number1 > +number2) {
//     console.log(number1);
// } else if (number2 > number1) {
//     console.log(number2);
// } else if (+number1 === +number2) {
//     console.log('Числа рівні');
// }else {
//     console.log('Введіть правильні дані')
// }

// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

// let chooseNumberOfFlat = prompt('Введіть номер квартири');
//
// if (+chooseNumberOfFlat >= 1 && +chooseNumberOfFlat <= 20) {
//     console.log('Під\'їзд 1');
// } else if (+chooseNumberOfFlat >= 21 && +chooseNumberOfFlat <= 48) {
//     console.log('Під\'їзд 2');
// } else if (+chooseNumberOfFlat >= 49 && +chooseNumberOfFlat <= 90) {
//     console.log('Під\'їзд 3');
// }else {
//     console.log('Введіть правильні дані')
// }


// - Ми маємо змінну number в яку користувач задає числове значення,
// якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО

// let number = prompt('Введіть число');
//
// switch (+number) {
//     case 10:
//         console.log('ВІРНО');
//         break;
//     default:
//         console.log('НЕВІРНО');
// }

// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3.
// якщо в змінну записали щось інше, спрацьовує else

let x = 2;
console.log('typeOf', typeof x);

if (typeof x === "number") {
    console.log(1);
} else if (typeof x === 'string') {
    console.log(2);
} else if (typeof x === 'boolean') {
    console.log(3);
} else if (typeof x === 'object') {
    console.log(4);
} else {
    console.log('Something else');
}


// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

// let temperature = 13;
//
// if (typeof temperature === "number" && temperature >= 10 && temperature <= 22) {
//     console.log('ми йдемо ВЧИТИСЯ');
// } else if (typeof temperature !== "number") {
//     console.log('Неправильні дані');
// } else {
//     console.log('сидимо вдома і вчимося ОНЛАЙН');
// }

// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .

// let enterNumber = 3;
//
// switch (enterNumber) {
//     case 1:
//         console.log('Auto');
//         break;
//     case 2:
//         console.log('Moto');
//         break;
//     case 3:
//         console.log('Telephone');
//         break;
//     case 4:
//         console.log('Gloves');
//         break;
//     case 5:
//         console.log('Socs');
//         break;
//     default:
//         console.log('You full');
// }