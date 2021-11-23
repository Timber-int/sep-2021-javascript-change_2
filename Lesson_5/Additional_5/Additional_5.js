// - Дано натуральное число n. Выведите все числа от 1 до n.
console.log('------------------------------------');

const func1 = (n) => {

    if (n > 0) {
        for (let i = 1; i < n; i++) {
            console.log(i)
        }
    } else if (n === 0) {
        console.log(0);
    }
};

func1(10);
// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
// или в порядке убывания в противном случае.
console.log('------------------------------------');

const func2 = (A, B) => {

    if (A > B) {
        for (let i = B; i <= A; i++) {
            console.log(i);
        }
    } else if (A < B) {
        for (let i = B; i >= A; i--) {
            console.log(i);
        }
    } else {
        console.log(A, '=', B);
    }
};

func2(-12, -2);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

console.log('------------------------------------');

const func3 = (array, i) => {

    for (let j = 0; j < array.length; j++) {
        if (i === j) {
            array.splice(i, 2, array[j + 1], array[j]);
        }
    }

    return array
};

console.log(func3([9, 8, 0, 4], 0));
console.log(func3([9, 8, 0, 4], 1));
console.log(func3([9, 8, 0, 4], 2));
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

console.log('------------------------------------');

const func4 = (array) => {


    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] === 0) {
            let num = array.splice(i, 1);

            for (let j = 0; j < num.length; j++) {
                array.push(num[j]);
            }
        }
    }

    return array;
}

console.log(func4([1, 0, 6, 0, 3]));
console.log(func4([0, 1, 2, 3, 4]));
console.log(func4([0, 0, 1, 0]));

