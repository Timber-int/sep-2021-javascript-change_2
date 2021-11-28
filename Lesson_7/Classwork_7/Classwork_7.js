// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer, year, maxSpeed, volume) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = function () {
//         for (const carKey in this) {
//             if (typeof this[carKey] !== "function") {
//
//                 console.log(`${this[carKey]} -  ${[carKey]}`);
//             }
//
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = this.maxSpeed + newSpeed;
//     }
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//
//     }
//
//     this.addDriver = function (driver) {
//         this.carDriver = driver;
//
//     }
// }
//
// console.log('-------------------------------------------------------');
//
// let carInfo = new Car('BMW', 'Germany', 2018, 320, 4);
//
// carInfo.info();
// carInfo.drive();
// carInfo.increaseMaxSpeed(410);
// carInfo.changeYear(2015);
// carInfo.addDriver({name: 'Ivan', skill: ['super Driver', 'Taxi']});
//
// console.log(carInfo);

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
console.log('-------------------------------------------------------');

class Car {

    constructor(model, producer, year, maxSpeed, volume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    };

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };

    info() {
        for (const carKey in this) {
            console.log(`${[carKey]} - ${this[carKey]}`)

        }
    };

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };

    changeYear(newValue) {
        this.year = newValue;
    };

    addDriver(driver) {
        this.driver = driver;
    };


}

let carInfo = new Car('BMW', 'Germany', 2018, 320, 4);

carInfo.info();
carInfo.drive();
carInfo.increaseMaxSpeed(410);
carInfo.changeYear(2015);
carInfo.addDriver({name: 'Ivan', skill: ['super Driver', 'Taxi']});

console.log(carInfo);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
console.log('-------------------------------------------------------');

function Cinderella(name, age, footSize) {
    this.name = name;
    this.age = name;
    this.footSize = footSize;
}

const CinderellaArray = [
    new Cinderella('Loly', 18, 28),
    new Cinderella('Doly', 28, 29),
    new Cinderella('Poly', 19, 36),
    new Cinderella('Moly', 22, 37),
    new Cinderella('Fola', 21, 30),
    new Cinderella('Dina', 22, 35),
    new Cinderella('Margo', 27, 29),
    new Cinderella('Inna', 17, 30),
    new Cinderella('Tyna', 19, 26),
    new Cinderella('Izabel', 25, 29),
];

const prince = {
    name: 'Jorg',
    age: 23,
    sizeFindShoe: 30,
}

// CinderellaArray.forEach((girl) => {
//     if (girl.footSize === prince.sizeFindShoe) {
//         console.log('*****************************************');
//         console.log(`Couple is ${girl.name} and ${prince.name}`);
//         console.log('*****************************************');
//     } else {
//         console.log(`${girl.name} and ${prince.name} not couple`);
//     }
// });


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const findGirl = CinderellaArray.find((girl) => {

    return girl.footSize === prince.sizeFindShoe;

});

console.log(findGirl);

