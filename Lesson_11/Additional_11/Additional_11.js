// есть JSON такого формата:
// '[{"childs":[{"age":25,"firstName":"Marta"},{"childs":[{"age":10,"firstName":"Arnold"},{"age":12,"firstName":"Nick"}],"age":32,"firstName":"Peter"}],"age":60,"firstName":"Alina"},{"age":35,"firstName":"Barbara"},{"age":43,"firstName":"Jack"},{"age":52,"firstName":"Tom"},{"childs":[{"age":15,"firstName":"Mike"},{"age":16,"firstName":"Joshua"}],"age":44,"firstName":"Michael"}]';

// нужно это все распарсить в такой массив:
//
//     [
//         { age: 60, firstName: 'Alina' },
//         { age: 10, firstName: 'Arnold' },
//         { age: 35, firstName: 'Barbara' },
//         { age: 43, firstName: 'Jack' },
//         { age: 16, firstName: 'Joshua' },
//         { age: 25, firstName: 'Marta' },
//         { age: 44, firstName: 'Michael' },
//         { age: 15, firstName: 'Mike' },
//         { age: 12, firstName: 'Nick' },
//         { age: 32, firstName: 'Peter' },
//         { age: 52, firstName: 'Tom' }
//     ]

//
// массив
// отсортирован
// по
// firstName
//
//
// Вот
// изначальная
// переменная:

const inputJSON = '[' +
    '{"childs":[{"age":25,"firstName":"Marta"},' +
    '{"childs":[{"age":10,"firstName":"Arnold"},' +
    '{"age":12,"firstName":"Nick"}],' +
    '"age":32,"firstName":"Peter"}],' +
    '"age":60,"firstName":"Alina"},' +
    '{"age":35,"firstName":"Barbara"},' +
    '{"age":43,"firstName":"Jack"},' +
    '{"age":52,"firstName":"Tom"},' +
    '{"childs":[{"age":15,"firstName":"Mike"}' +
    ',{"age":16,"firstName":"Joshua"}],' +
    '"age":44,"firstName":"Michael"}]';

let firstArray = JSON.parse(inputJSON);
let secondArray = []

// for (let firstArrayKey in firstArray) {
//     const firstElement = firstArray[firstArrayKey];
//
//     if (!firstElement.childs) {
//
//         secondArray.push(firstElement);
//
//     } else if (firstElement.childs) {
//       const childElement = firstElement.childs;
//         console.log(childElement)
//         for (let childElementKey in childElement) {
//             console.log(childElement[childElementKey])
//         }
//     }
// }

// console.log(secondArray);

function recursiveFunk(value) {
    for (let valueKey in value) {
        if (!value[valueKey].childs && !secondArray.includes(value[valueKey])) {
            secondArray.push(value[valueKey]);
        } else if (value[valueKey]) {
            // console.log(value[valueKey]);
            secondArray.push({age: value[valueKey].age, firstName: value[valueKey].firstName});

            for (let valueElementKey in value[valueKey].childs) {
                const valueChild = value[valueKey].childs;
                // console.log(valueChild[valueElementKey]);
                if (!valueChild[valueElementKey].childs) {
                    secondArray.push(valueChild[valueElementKey]);

                } else if (valueChild[valueElementKey].childs) {
                    const newValueChild = valueChild[valueElementKey].childs;
                    secondArray.push({age: valueChild[valueElementKey].age, firstName: valueChild[valueElementKey].firstName});

                    for (let newValueChildKey in newValueChild) {
                        // console.log(newValueChild[newValueChildKey]);
                        secondArray.push(newValueChild[newValueChildKey]);

                    }
                }
            }
        }
    }
}


recursiveFunk(firstArray);
console.log(secondArray);

