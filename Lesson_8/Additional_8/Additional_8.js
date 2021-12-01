// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в окремий масив. масив вивести в консоль

//№1 Рекурсія

// const newArray = [];
// const elementsClassList = document.getElementsByClassName('rules');
// let i = 0;
// const recursiveFunction = (array) => {
//
//     const superArray = array[i].classList.value.toString().split(' ');
//     newArray.push(superArray[0], superArray[1]);
//     i++;
//
//     if (i === array.length) return;
//     recursiveFunction(array, 0);
//
// }
//
// recursiveFunction(elementsClassList);
// console.log(newArray);

//№2 Рекурсія

function reCall(startElement) {
    let newArr = [];
    for (const el of startElement) {
        if (el.children) {
            newArr.push(...reCall(el.children));
        }
         newArr.push(...el.classList);
    }
    return newArr;
}

console.log(reCall(document.body.children));
