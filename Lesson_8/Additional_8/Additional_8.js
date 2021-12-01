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

const newArray = [];
const elementsClassList = document.getElementsByClassName('rules');

let i = 0;
const recursiveFunction = (array) => {
    const superArray = array[i].classList.value.toString().split(' ');
    newArray.push(superArray[0], superArray[1]);
    i++;

    if (i === array.length) return;
    recursiveFunction(array);

}

recursiveFunction(elementsClassList);
console.log(newArray);