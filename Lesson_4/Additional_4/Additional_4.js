// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.
{
    console.log('------------------------------------------------');

    function funcСoncatenation(arg1, arg2) {

        if (arg1 && arg2) {
            console.log(arg1 + arg2);
        } else if (arg1) {
            console.log(arg1);
        } else {
            console.log('Wrong!!!');
        }

    }

    funcСoncatenation('Hello ', 'world');
    funcСoncatenation('Okten');
}
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
{
    console.log('------------------------------------------------');

    function sumArrayElement(array1, array2) {
        let newArray = [];
        let sumElem = 0;

        for (let i = 0; i < array1.length; i++) {
            for (let j = 0; j < array2.length; j++) {
                if (i === j) {
                    sumElem = array1[i] + array2[j];
                    newArray.push(sumElem);
                }
            }
        }
        return console.log(newArray);
    }

    sumArrayElement([1, 2, 3, 4], [2, 3, 4, 5]);
}

//
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
{
    console.log('111------------------------------------------------');

    function arrayKeyElement(array) {
        let newArray = [];

        for (let arrayElement of array) {
            for (let arrayKey in arrayElement) {
                newArray.push(arrayKey);
            }
        }
        return console.log(newArray);
    }

    arrayKeyElement([{name: 'Dima', age: 13}, {model: 'Camry'}]);
}

//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
{
    console.log('------------------------------------------------');

    function arrayElement(array) {
        let newArray = [];

        for (let arrayElement of array) {
            for (let keyElement in arrayElement) {
                newArray.push(arrayElement[keyElement]);
            }
        }
        return console.log(newArray);

    }

    arrayElement([{name: 'Dima', age: 13}, {model: 'Camry'}]);
}
//
//
//     -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
{
    console.log('------------------------------------------------');

    function changeElementPosition(array, i) {
        for (let j = 0; j < array.length; j++) {
            if (j === i) {
                array.splice(j, 2, array[j + 1], array[j]);

            }
        }
        return console.log(array);

    }

    changeElementPosition([9, 8, 0, 4], 0);
    changeElementPosition([9, 8, 0, 4], 1);
    changeElementPosition([9, 8, 0, 4], 2);

}
//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

{
    console.log('------------------------------------------------');

    function transportArrayElement(array) {

        let num;

        for (let i = array.length - 1; i >= 0; i--) {

            if (array[i] === 0) {
                num = array.splice(i, 1);
                for (let j = 0; j < num.length; j++) {

                    array.push(num[j]);
                }
            }
        }

        return console.log(array);

    }

    transportArrayElement([1, 0, 6, 0, 3]);
    transportArrayElement([0, 1, 2, 3, 4]);
    transportArrayElement([0, 0, 1, 0]);

}

// - Дано натуральное число n. Выведите все числа от 1 до n.
{
    console.log('------------------------------------------------');


    function numberN(n) {
        if (n > 0) {
            for (let i = 1; i < n; i++) {

                console.log(i)
            }
        } else if (n === 0) {
            console.log(0);
        }
    }

    numberN(18);

}
// - Даны два целых числа A и В . Выведите все числа от A до B включительно,
// в порядке возрастания, если A < B, или в порядке убывания в противном случае.
{
    console.log('------------------------------------------------');


    function funcAOrB(A, B) {
        if (A > B) {
            for (let i = B; i <= A; i++) {
                console.log(i);
            }
        } else if (A < B) {
            for (let i = B; i >= A; i--) {
                console.log(i)
            }

        } else if (A === B) {
            console.log('A = B', A,' ', B);
        }
    }


    funcAOrB(-10, 10);
}

