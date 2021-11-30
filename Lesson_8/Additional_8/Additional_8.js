// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

//№1 Простий цикл
// const elementsClassList = document.getElementsByClassName('rules');
//
// const recursiveFunction = (array) => {
//     let newArray = [];
//     for (let elem of array) {
//         newArray.push(elem.classList.value);
//     }
//     return newArray;
// }
// console.log(recursiveFunction(elementsClassList));

//№2 Рекурсія

let newArray = [];
const elementsClassList = document.getElementsByClassName('rules');

let i = 0;
const recursiveFunction = (array) => {
    newArray.push(array[i].classList.value);
    i++;

    if (i === array.length) return;
    recursiveFunction(array);

}

recursiveFunction(elementsClassList);
console.log(newArray);