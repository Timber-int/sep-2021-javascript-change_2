let energy = 100;
let money = 1000;

function todoOne(value, cb) {

    setTimeout(() => {
        console.log('Мій розпорядок дня:');
        console.log('Пора вставати');
        if (value < 90) {
            console.log('________________________________________');
            cb('Я втомлений сьогодні посплю довше', null);
        } else {
            console.log('________________________________________');
            energy -= 10;
            console.log('Чудовий ранок');
            cb(null, 'Я прокидаюся');
        }
    }, 3000);

}

function todoTwo(value, cb) {

    setTimeout(() => {
        if (value < 50) {
            console.log('________________________________________');
            console.log('Я планую піти на пробіжку');
            console.log('Сьогодні пробіжу 10км');
            cb('Та ну його я занадто старий для всього цього ******', null);
        } else {
            console.log('________________________________________');
            console.log('Я готуюся до пробіжки');
            energy -= 20;
            cb(null, 'Сьогодні найкращий день для щоб побити свій рекорд');
        }
    }, 1000);

}

function todoThree(value, cb) {

    setTimeout(() => {
        if (value < 60) {
            console.log('________________________________________');
            console.log('Ця пробіжка мані важко далася');
            cb('Я зандто втомлений щоб щось робити йду спатки', null);
        } else {
            console.log('________________________________________');
            console.log('Непогана така пробіжка завтра повторю, пора чимось підкріпитися');
            energy += 30;
            cb(null, 'Я снідаю');
        }
    }, 500);

}

function todoFour(value, cb) {

    setTimeout(() => {
        if (value < 800) {
            console.log('________________________________________');
            console.log('Я повинен прийняти душ');
            cb('Я занадто втомлений, та ладно буду грязний', null);
        } else {
            console.log('________________________________________');
            console.log('Пора прийняти душ');
            energy += 10;
            cb(null, 'Немає нічого кращого ніж гарячий душ зранку');
        }
    }, 1500);

}

function todoFive(weather, cb) {

    setTimeout(() => {
        if (weather !== 'Sunny') {
            console.log('________________________________________');
            console.log('Яка жахлива погода');
            cb('Я залишаюся вдома пити гарячий глінтвейн', null);
        } else {
            console.log('________________________________________');
            console.log('Погода як погода');
            cb(null, 'Я йду на роботу');
        }
    }, 550);

}

function todoSix(dollar, value, cb) {

    setTimeout(() => {
        if (value <= 80 || dollar <= 600) {
            console.log('________________________________________');
            console.log('Да день сьгодні не дуже');
            money -= 100;
            energy -= 30;
            cb('Щей таску завалив', null);
        } else {
            console.log('________________________________________');
            console.log('Сьогодні вивчив багато нового');
            energy -= 50;
            money += 200;
            cb(null, 'Робота зроблена');
        }
    }, 1500);

}

function todoSeven(dollars, cb) {

    setTimeout(() => {
        if (dollars < 1000) {
            console.log('________________________________________');
            console.log('Потрібно щось купити на вечерю');
            cb('А язабув в мене ж грошей немає', null);
        } else {
            money -= 600;
            console.log('________________________________________');
            console.log('Щоб таке вибрати на вечерю');
            cb(null, 'Замовлю піцу і суші');
        }
    }, 200);

}

function todoEight(movie, dollars, cb) {

    setTimeout(() => {
        if (dollars <= 500) {
            console.log('________________________________________');
            console.log('Можна сходити в кіно');
            cb('А нічого цікавого немає краще вдома почитати книжку', null);
        } else {
            money -= 300;
            console.log('________________________________________');
            console.log('Цікавий фільм варто глянути');
            cb(null, `Я дивлюся фільм ${movie}`);
        }
    }, 2000);

}


function todoNine(value, cb) {

    setTimeout(() => {
        if (value <= 50) {
            console.log('________________________________________');
            console.log('Пора щось повечеряти');
            cb('Я забув що нічого не купив на вечерю, йду спати голодним', null);
        } else {
            energy += 20;
            console.log('________________________________________');
            console.log('Пора вечеряти');
            cb(null, `Ням ням ням`);
        }
    }, 1200);

}

function todoTen(loudNeighbors = false, cb) {

    setTimeout(() => {
        if (loudNeighbors === true) {
            console.log('________________________________________');
            console.log('Пора лягати спати');
            cb('Я не можу заснути', null);
        } else {
            energy += 80;
            console.log('________________________________________');
            console.log('Пора лягати спати');
            cb(null, `Я засинаю`);
        }
    }, 1000);

}

todoOne(energy, (e, value) => {
    if (e) {
        console.log(e);
        return;

    } else {
        console.log(value);
    }
    todoTwo(energy, (e, value) => {
        if (e) {
            console.log(e);
            return;
        } else {
            console.log(value);
        }
        todoThree(energy, (e, value) => {
            if (e) {
                console.log(e);
                return;
            } else {
                console.log(value);
            }
            todoFour(energy, (e, value) => {
                if (e) {
                    console.log(e);
                    return;
                } else {
                    console.log(value);
                }
                todoFive("Sunny", (e, value) => {
                    if (e) {
                        console.log(e);
                        return;
                    } else {
                        console.log(value);
                    }
                    todoSix(money, energy, (e, value) => {
                        if (e) {
                            console.log(e);
                            return;
                        } else {
                            console.log(value);
                        }
                        todoSeven(money, (e, value) => {
                            if (e) {
                                console.log(e);
                                return;
                            } else {
                                console.log(value);
                            }
                            todoEight('Tor', money, (e, value) => {
                                if (e) {
                                    console.log(e);
                                    return;
                                } else {
                                    console.log(value);
                                }
                                todoNine(energy, (e, value) => {
                                    if (e) {
                                        console.log(e);
                                        return;
                                    } else {
                                        console.log(value);
                                    }
                                    todoTen(false, (e, value) => {
                                        if (e) {
                                            console.log(e);
                                            return;
                                        } else {
                                            console.log(value);
                                        }
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});