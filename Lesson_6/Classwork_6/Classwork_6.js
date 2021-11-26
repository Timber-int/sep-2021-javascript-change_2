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
    let array = [];
    console.log(str);

    for (let i = 0; i <= str.length + 1; i++) {

        array.push(str.slice(0, n));

        str = str.slice(n);

    }
    return array;


};

console.log(cutString('наслаждение', 3));

// 1) Створити масив з 20 чисел та:
let massive = [1, 2, 3, 4, 5, 6, -4, 6, 430, 35, 0, 1, 3, -4, 99, 100, 32, -32, 1, 56];
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
// //     a) відсортувати його від меншого до більшого.
// console.log('a', massive.sort((a, b) => a - b));
// //     b) відсортувати його від більшого до меншого.
// console.log('b', massive.sort((a, b) => b - a));
// //     c) Відфілтрувати числа які є кратними 3.
// let filterMassive = massive.filter(((value, index) => value % 3 === 0));
// console.log('c', filterMassive);
// // d) Відфілтрувати числа які є більшими за 10.
// let filterMassiveMore10 = massive.filter((value) => value > 10);
// console.log('d', filterMassiveMore10);
// // e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// document.write('e')
// massive.forEach((value) => {
//     document.write(`<div>${value}</div>`);
// });
// // f) За допомогою map збільшити кожен елемент в масиві в три рази.
// let massiveMap = massive.map(((value, index) => value * 3));
// console.log('f', massiveMap);
// //     g) Порахувати загальну суму всіх елментів у масиві (reduce)
//
// let sumMassive = massive.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue;
// }, 0);
//
// console.log('g', sumMassive);
//
// // 2) Створити масив з 20 стрічок та:
// let newMassive = ['Artem', 'Tom', 'Jon', 'Kira', 'Nina', 'Dora', 'Karina', 'Semen', 'Avi', 'Sula'];
// //     a) Відсортувати його в алфавітному порядку
// console.log('a', newMassive.sort());
// // b) Відсортувати в зворотньому порядку
// console.log('b', newMassive.reverse());
// // c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
// let filterNewMassiveMore4 = newMassive.filter(((value, index) => value.length > 4));
// console.log('c', filterNewMassiveMore4);
// // d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
// let mapNewMassiveChangeWord = newMassive.map((value, index) => 'Sam says ' + value);
// console.log('d', mapNewMassiveChangeWord);

// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];

// console.log(users);

// a) відсортувати його за  віком (зростання , а потім окремо спадання)

// let sortUsersBig = users.sort((a, b) => {
//     return a.age - b.age;
// });

// console.log('a',sortUsersBig);

// let sortUsersSmall = users.sort((a, b) => {
//     return b.age - a.age;
// });
//
// console.log('a', sortUsersSmall);

// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// let sortNameLength = users.sort((a, b) => a.name.length - b.name.length);
// console.log('b', sortNameLength);

// c) пройтись по ньому та додати кожному юзеру поле id -
// яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// const usersId = users.map((value, index) => {
//     value.id = index + 1;
//     return value;
// });
// console.log('c', usersId);

// d) відсортувати його за індентифікатором
// const sortUserId = usersId.sort((a, b) => b.id - a.id);
// console.log('d',sortUserId);
// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

// const marriedUser = users.filter((value, index) => value.isMarried === true).map((user) => {
//     user.flat = 'Have flat'
//     return user;
// });
// console.log('e', marriedUser);
//

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
const cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
    {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }
];
//
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// const filterCars = cars.filter((car)=>car.volume>3);
// console.log(filterCars);

// - двигун = 2л
// const filterCars = cars.filter((car)=>car.volume=2);
// console.log(filterCars);

// - виробник мерс
// const filterCars = cars.filter((car)=>car.producer==='mercedes');
// console.log(filterCars);

// - двигун більше 3х літрів + виробник мерседес
// const filterCars = cars.filter((car) => {
//     if (car.volume > 3 && car.producer === 'mercedes') {
//         return car;
//     }
// });
// console.log(filterCars);

// - двигун більше 3х літрів + виробник субару
// const filterCars = cars.filter((car) => {
//     if (car.volume > 3 && car.producer === 'subaru') {
//         return car;
//     }
// });
// console.log(filterCars);

// - сили більше ніж 300
// const filterCars = cars.filter((car) => car.power>300);
// console.log(filterCars);


// - сили більше ніж 300 + виробник субару
// const filterCars = cars.filter((car) => car.power>300 && car.producer === 'subaru');
// console.log(filterCars);

// - мотор серіі ej
// let sortCars = cars.filter((car)=>{
//     if (car.engine.startsWith('ej')){
//         return car;
//     }
// });
//
// console.log(sortCars);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// const filterCars = cars.filter((car) => car.power>300 && car.producer === 'subaru' && car.engine.startsWith('ej'));
// console.log(filterCars);

// - двигун меньше 3х літрів + виробник мерседес
// const filterCars = cars.filter((car) => car.volume<3 && car.producer === 'mercedes');
// console.log(filterCars);

// - двигун більше 2л + сили більше 250
// const filterCars = cars.filter((car) => car.volume>2 && car.power>250);
// console.log(filterCars);

// - сили більше 250  + виробник бмв
// const filterCars = cars.filter((car) =>car.power > 250 && car.producer === 'bmw');
// console.log(filterCars);
//
//
// - взять слдующий массив
const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];


//
// -- Відсортувати їх по ID
// console.log(usersWithAddress.sort((a, b) => a.id - b.id));
// -- Відсортувати їх по ID в зворотньому порядку
// console.log(usersWithAddress.sort((a, b) => b.id - a.id));
// -- Відсортувати по віку
// console.log(usersWithAddress.sort((a, b) => a.age - b.age));
// -- Відсортувати по віку в зворотньому порядку
// console.log(usersWithAddress.sort((a, b) => b.age - a.age));
// -- Відсорутвати по імені
// console.log(usersWithAddress.sort((a, b) => a.name.length - b.name.length));

