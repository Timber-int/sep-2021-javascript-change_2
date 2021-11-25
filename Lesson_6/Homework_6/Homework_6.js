// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('----------------------------------');

let sentence1, sentence2, sentence3;

sentence1 = 'hello world';
sentence2 = 'lorem ipsum';
sentence3 = 'javascript is cool';

console.log(sentence1.length);
console.log(sentence2.length);
console.log(sentence3.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

console.log('----------------------------------');

console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

console.log('----------------------------------');

console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
{
    console.log('----------------------------------');

    let str = ' dirty string   ';

    console.log(str.trim());
}
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

console.log('----------------------------------');

const stringToArray = (str) => {
    let arr = [];

    arr.push(str.split(' '));

    console.log(arr);
};

stringToArray('Каждый охотник желает знать');
//
//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

console.log('----------------------------------');

const delete_characters = (str, length) => {

    str = str.split(' ');

    for (let i = 0; i < str.length; i++) {
        if (length === str[i].length) {
            console.log(str[i-1]);
        }
    }

};

delete_characters('Каждый охотник желает знать', 7);

//
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

console.log('----------------------------------');

const insert_dash = (str) => {

    str = str.replaceAll(' ', '-').toUpperCase();

    console.log(str);

};

insert_dash('HTML JavaScript PHP');

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
console.log('----------------------------------');

const forLowerToUpper = (str) => {

    let symbol = str[0].toUpperCase();

    str = str.replace(str[0], symbol);

    console.log(str);
};

forLowerToUpper('hello it\'s me');

// - Напишіть функцію capitalize(str), яка повертає рядок,
// у якому кожне слово починається з великої літери.

console.log('----------------------------------');

const capitalize = (str) => {

    let strSplit = str.trim().split(' ');

    for (let i = 0; i < strSplit.length; i++) {
        let valueForBigWord;
        valueForBigWord = strSplit[i][0].toUpperCase()

        if (strSplit[i][0] === valueForBigWord) {
            console.log(strSplit[i]);
        }
    }
    console.log('*********************************');
    console.log(str);
    console.log('*********************************');

}

capitalize('Леопольд выходи Подлый трус');
capitalize('Ребята Давайте жить Дружно!!!');