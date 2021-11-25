//
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

console.log('----------------------------------');

let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

const normalizeFunc = (name) => {

    if (name.includes('..')) {
        return name.replace('..', ' ');

    } else if (name.includes('---')) {
        return name.replace('---', ' ');

    } else if (name.includes('__')) {
        return name.replace('__', ' ');

    }

};
console.log(normalizeFunc(n1));
console.log(normalizeFunc(n2));
console.log(normalizeFunc(n3));
//
//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
console.log('----------------------------------');

const func1 = (limit) => {
    let array = [];
    let number;

    for (let i = 0; i < limit; i++) {
        number = Math.floor(Math.random() * 100);
        array[i] = number;
    }

    return array;
};

console.log(func1(10));
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
console.log('----------------------------------');

const func2 = (limit) => {
    let array = [];
    let number;

    for (let i = 0; i < limit; i++) {
        number = Math.floor(Math.random() * 100);
        array[i] = number;
    }
    array.sort(((a, b) => {
        return a - b
    }));

    return array;
};

console.log(func2(10));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
console.log('----------------------------------');

const func3 = (limit) => {
    let array = [];
    let number;

    for (let i = 0; i < limit; i++) {
        number = Math.floor(Math.random() * 100);
        array[i] = number;
    }
    array = array.filter((value => {
        return value % 2 === 0;
    }));

    return array;
};

console.log(func3(10));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

console.log('----------------------------------');

const func4 = (limit) => {
    let array = [];
    let number;

    for (let i = 0; i < limit; i++) {
        number = Math.floor(Math.random() * 100);
        array[i] = number;
    }
    array = array.map((value => {
        return value + '';
    }));

    return array;
};

console.log(func4(10));
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

console.log('----------------------------------');

const sortNums = (direction, array) => {
    if (direction === 'ascending') {
        array = array.sort(((a, b) => {
            return a - b
        }));
    } else if (direction === 'descending') {
        array = array.sort(((a, b) => {
            return b - a
        }));
    }

    return array;
}

console.log('ascending', sortNums('ascending', [11, 21, 3]));
console.log('descending', sortNums('descending', [11, 21, 3]));

// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

console.log('----------------------------------');

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sortArray = coursesAndDurationArray.sort((a, b) => {
    return b.monthDuration - a.monthDuration;
});

console.log('Сортування по спаданню -->', sortArray);

let filterArray = coursesAndDurationArray.filter(value => {
    return value.monthDuration > 5;
});

console.log('Пофільтрований курси з тривалістю більше 5 місяців -->', filterArray);


// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

console.log('----------------------------------');

const cutString = (str, n) => {


};

cutString('наслаждение', 3);
