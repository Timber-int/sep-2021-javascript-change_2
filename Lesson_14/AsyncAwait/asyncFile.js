let energy = 100;
let money = 1000;

function todoOne(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Мій розпорядок дня:');
            console.log('Пора вставати');
            if (value < 90) {
                console.log('________________________________________');
                reject('Я втомлений сьогодні посплю довше');
            } else {
                console.log('________________________________________');
                energy -= 10;
                console.log('Чудовий ранок');
                resolve('Я прокидаюся');
            }
        }, 3000);
    });
}

function todoTwo(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value < 50) {
                console.log('________________________________________');
                console.log('Я планую піти на пробіжку');
                console.log('Сьогодні пробіжу 10км');
                reject('Та ну його я занадто старий для всього цього ******');
            } else {
                console.log('________________________________________');
                console.log('Я готуюся до пробіжки');
                energy -= 20;
                resolve('Сьогодні найкращий день для щоб побити свій рекорд');
            }
        }, 1000);
    });
}

function todoThree(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value < 60) {
                console.log('________________________________________');
                console.log('Ця пробіжка мані важко далася');
                reject('Я зандто втомлений щоб щось робити йду спатки');
            } else {
                console.log('________________________________________');
                console.log('Непогана така пробіжка завтра повторю, пора чимось підкріпитися');
                energy += 30;
                resolve('Я снідаю');
            }
        }, 500);
    });
}

function todoFour(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value < 80) {
                console.log('________________________________________');
                console.log('Я повинен прийняти душ');
                reject('Я занадто втомлений, та ладно буду грязний');
            } else {
                console.log('________________________________________');
                console.log('Пора прийняти душ');
                energy += 10;
                resolve('Немає нічого кращого ніж гарячий душ зранку');
            }
        }, 1500);
    });
}

function todoFive(weather) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (weather !== 'Sunny') {
                console.log('________________________________________');
                console.log('Яка жахлива погода');
                reject('Я залишаюся вдома пити гарячий глінтвейн');
            } else {
                console.log('________________________________________');
                console.log('Погода як погода');
                resolve('Я йду на роботу');
            }
        }, 550);
    });
}

function todoSix(dollar, value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value <= 80 || dollar <= 600) {
                console.log('________________________________________');
                console.log('Да день сьгодні не дуже');
                money -= 100;
                energy -= 30;
                reject('Щей таску завалив');
            } else {
                console.log('________________________________________');
                console.log('Сьогодні вивчив багато нового');
                energy -= 50;
                money += 200;
                resolve('Робота зроблена');
            }
        }, 1500);
    });
}

function todoSeven(dollars) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dollars < 1000) {
                console.log('________________________________________');
                console.log('Потрібно щось купити на вечерю');
                reject('А язабув в мене ж грошей немає');
            } else {
                money -= 600;
                console.log('________________________________________');
                console.log('Щоб таке вибрати на вечерю');
                resolve('Замовлю піцу і суші');
            }
        }, 200);
    });
}

function todoEight(movie, dollars) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (dollars <= 500) {
                console.log('________________________________________');
                console.log('Можна сходити в кіно');
                reject('А нічого цікавого немає краще вдома почитати книжку');
            } else {
                money -= 300;
                console.log('________________________________________');
                console.log('Цікавий фільм варто глянути');
                resolve(`Я дивлюся фільм ${movie}`);
            }
        }, 2000);
    });
}


function todoNine(value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value <= 50) {
                console.log('________________________________________');
                console.log('Пора щось повечеряти');
                reject('Я забув що нічого не купив на вечерю, йду спати голодним');
            } else {
                energy += 20;
                console.log('________________________________________');
                console.log('Пора вечеряти');
                resolve(`Ням ням ням`);
            }
        }, 1200);
    });
}

function todoTen(loudNeighbors = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (loudNeighbors === true) {
                console.log('________________________________________');
                console.log('Пора лягати спати');
                reject('Я не можу заснути');
            } else {
                energy += 80;
                console.log('________________________________________');
                console.log('Пора лягати спати');
                resolve(`Я засинаю`);
            }
        }, 1000);
    });
}


async function myTodo() {
    try {
        console.log(await todoOne(energy));
        console.log(await todoTwo(energy));
        console.log(await todoThree(energy));
        console.log(await todoFour(energy));
        console.log(await todoFive('Sunny'));
        console.log(await todoSix(money, energy));
        console.log(await todoSeven(money));
        console.log(await todoEight('Gong', money));
        console.log(await todoNine(energy));
        console.log(await todoTen(false));

        console.log('---------------------------------------');
        console.log('My money',money);
        console.log('My energy',energy);
    } catch (e) {
        console.error(e);
    }

}

myTodo();