// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
{
    console.log('------------------------------------------------');

    function maxAndMin(num1, num2, num3) {
        if (num1 <= num2 && num1 <= num3) {
            console.log(num1);
        } else if (num2 <= num1 && num2 <= num3) {
            console.log(num2);
        } else if (num3 <= num1 && num3 <= num2) {
            console.log(num3);
        } else {
            console.log('Bad request');
        }

    }

    maxAndMin(2, -12, 3);
}
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
{
    console.log('------------------------------------------------');

    function minAndMax(num1, num2, num3) {
        if (num1 >= num2 && num1 >= num3) {
            console.log(num1);
        } else if (num2 >= num1 && num2 >= num3) {
            console.log(num2);
        } else if (num3 >= num1 && num3 >= num2) {
            console.log(num3);
        } else {
            console.log('Bad request');
        }

    }

    minAndMax(3, -12, 3);
}
// - створити функцію яка повертає найбільше число з масиву
{
    console.log('------------------------------------------------');

    function funcMax(array) {
        let maxNumber = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] >= maxNumber) {
                maxNumber = array[i];
            }
        }

        return console.log(maxNumber);
    }

    funcMax([1, 2, 3, 4, 24, 6, -19, 0]);

}
// - створити функцію яка повертає найменьше число з масиву
{
    console.log('------------------------------------------------');

    function minElementOfArray(array) {
        let minElement = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] <= minElement) {
                minElement = array[i];
            }
        }

        return console.log(minElement);
    }

    minElementOfArray([1, 2, 3, -10, 4, 5, 0]);

}
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
{
    console.log('------------------------------------------------');

    function sumArrayElement(array) {
        let sum = 0;

        array.forEach(arrayElem =>
            sum += arrayElem);

        return console.log(sum);
    }

    sumArrayElement([32, -2, 3]);
}
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
{
    console.log('------------------------------------------------');

    function arithmeticMean(array) {
        let sum = 0;

        array.forEach(arrayElem =>
            sum += arrayElem);

        return console.log(sum / array.length);

    }

    arithmeticMean([1, 2, 3]);
}
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
{
    console.log('------------------------------------------------');

    function maxAndMinOfArray(numbers) {
        let minNumber = arguments[0];
        let maxNumber = arguments[0];

        for (let argument of arguments) {
            if (argument <= minNumber) {
                minNumber = argument;
            } else if (argument >= maxNumber) {
                maxNumber = argument;
            }
        }

        console.log('Max number->',maxNumber);
        return minNumber;
    }

   let result =  maxAndMinOfArray(0, 2, -34, 5, 6, 7, 4, 2, -32, 23, 321);

    console.log(result)

}
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
{
    console.log('------------------------------------------------');

    function randElementArray() {
        let array = [];
        let number = 0;

        for (let i = 0; i < 100; i++) {
            number = Math.floor(Math.random() * 100);

            array[i] = number;
        }

        return console.log(array);
    }

    randElementArray();
}
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
// limit - аргумент, який характеризує кінцеве значення діапазону.
{
    console.log('------------------------------------------------');

    function addArrayElementLimit(limit) {
        let array = [];
        let number = 0;

        for (let i = 0; i < limit; i++) {
            number = Math.floor(Math.random() * limit);
            array[i] = number;
        }

        return console.log(array);
    }

    addArrayElementLimit(12);

}
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
{
    console.log('------------------------------------------------');

    function funcArray(array) {
        let newArray;

        newArray = array.reverse()

        return console.log(newArray);

    }

    funcArray([1, 2, 3]);
}
