// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

// let time = prompt('Введіть число від 0 до 59');
//
// if (time > 0 && time <= 15) {
//     console.log('Перша частина години');
// } else if (time > 0 && time >= 15 && time <= 30) {
//     console.log('Друга частина години');
// } else if (time > 0 && time >= 30 && time <= 45) {
//     console.log('Третя частина години');
// } else if (time > 0 && time >= 45 && time <= 69) {
//     console.log('Четверта частина години');
// } else {
//     alert('Неправильно вказане число');
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду)
// місяця потрапляє це число (у першу, другу чи третю).

// let day = prompt('Введіть число від 1 до 31');
//
// if (day > 0 && day <= 10) {
//     console.log('Перша частина місяця');
// } else if (day > 0 && day > 10 && day <= 20) {
//     console.log('Друга частина місяця');
// } else if (day > 0 && day > 20 && day <= 31) {
//     console.log('Третя частина місяця');
// } else {
//     alert('Неправильно вказане число');
// }


// - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

// let test = confirm('Натасніть кнопку');
//
// switch (test) {
//     case true:
//         console.log('Вірно');
//         break;
//     case false :
//         console.log('Неправильно');
//         break;
//     default:
//         console.log('Кнопка натиснути потрібно всетаки');
// }
//
// console.log('--------------------------------------------------------------');
//
// test === true ? console.log('Вірно') : console.log('Неправильно');

// - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// let a;
//
// // a = 1;
// // a = 0;
// a = -3;
//
// a > 0 ? console.log('Вірно') : console.log('Неправильно');
//

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
//
// let day = prompt('Введіть день тижня від 1 до 7');
//
// switch (+day) {
//     case 1 :
//         console.log('Прокинутися');
//         console.log('Поснідати');
//         console.log('Побігати');
//         console.log('Повчитися');
//         console.log('Ще раз повчитися');
//         break;
//     case 2 :
//         console.log('Прокинутися');
//         console.log('Прогялятися з собакою');
//         console.log('Почитати книжку');
//         console.log('Піти в кіно');
//         console.log('Поспати');
//         break;
//     case 3 :
//         console.log('Прокинутися');
//         console.log('Піти в спортзал');
//         console.log('Побігати');
//         console.log('Попрацювати');
//         console.log('Поспати');
//         break;
//     case 4 :
//         console.log('Прокинутися');
//         console.log('Прийняти душ');
//         console.log('Поснідати');
//         console.log('Піти в парк');
//         console.log('Піти в клуб');
//         break;
//     case 5 :
//         console.log('Прокинутися');
//         console.log('Поснідати');
//         console.log('Пообідати');
//         console.log('Повечеряти');
//         console.log('Вринципі на сьогодні і так багато зробив');
//         break;
//     case 6 :
//         console.log('Прокинутися');
//         console.log('Помитися');
//         console.log('Поїсти');
//         console.log('Повчитися');
//         console.log('Прочитати книжку');
//         break;
//     case 7 :
//         console.log('Прокинутися');
//         console.log('Згадати що сьгодні неділя і поспати до понеділка');
//
//         break;
//     default: {
//         console.log('День тижня має тільки сім днів спробуй ще раз ввести число');
//     }
// }


// - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.

// let year = prompt('Введіть рік');
//
// if (+year > 0 && year % 4 === 0) {
//     console.log('Рік високосний');
// } else {
//     console.log('Рік не високосний');
// }

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!

let officialNameJs = prompt('Яка «офіційна» назва JavaScript?');

if (officialNameJs === 'ECMAScript') {
    console.log('«Правильно!»');
} else {
    console.log('«Не знаєте?»');
    console.log('Можливо ECMAScript!');
}