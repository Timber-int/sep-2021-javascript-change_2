// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
console.log('a---------------------------------------------------');
const mainHeader = document.getElementById('main_header');
mainHeader.style.color = '#092022'
// b) робить шириниу елементу ul 400px
console.log('b---------------------------------------------------');
const ulElements = document.getElementsByTagName('ul');
for (let ulElement of ulElements) {
    ulElement.style.width = '400px';
    console.log(ulElement);
}
// c) робить шириниу всіх елементів з класом linkList шириною 50%
console.log('c---------------------------------------------------');
const elementsLinkList = document.getElementsByClassName('linkList');
for (let linkListElem of elementsLinkList) {
    linkListElem.style.width = '50%';
    console.log(linkListElem);
}
// d) отримує текст який зберігається в елементі з класом listElement2
console.log('d---------------------------------------------------');
const elementsListElement2 = document.getElementsByClassName('listElement2');
for (let elementList2 of elementsListElement2) {
    console.log(elementList2.textContent);
}
// e) отримує всі елементи li та змінює ім колір фону на сірий
console.log('e---------------------------------------------------');
const allLiElements = document.getElementsByTagName('li');
for (let elementLi of allLiElements) {
    console.log(elementLi);
    elementLi.style.backgroundColor = 'grey';
}
// f) отримує всі елементи 'a' та додає їм клас anchor
console.log('f---------------------------------------------------');
const elementsAList = document.getElementsByTagName('a');
for (let elementA of elementsAList) {
    elementA.classList.add('anchor');
    console.log(elementA);
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
console.log('g---------------------------------------------------');
for (let elementA of elementsAList) {
    if (elementA.textContent === 'link3') {
        elementA.style.fontSize = '40px';
        console.log(elementA);
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
console.log('h---------------------------------------------------');
for (let elementA of elementsAList) {
    elementA.classList.add('element_XXX');
    let word = elementA.classList.value;
    // console.log(word);
    elementA.innerText = word.split('_').slice(1).join('');
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
console.log('i---------------------------------------------------');
//  const colorElem = prompt('Введіть колір');
//  const subHeaderElements = document.getElementsByClassName('sub-header');
// for (let subElement of subHeaderElements) {
//     if (!colorElem) {
//         console.log('Wrong!!!');
//         break;
//
//     } else if (colorElem) {
//         subElement.style.backgroundColor = colorElem;
//
//     }
// }

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment .
// Колір отримати з prompt()
console.log('j---------------------------------------------------');
// const colorElem = prompt('Введіть колір');
// const subHeaderElements = document.getElementsByClassName('sub-header');
// for (let subElement of subHeaderElements) {
//     console.log(subElement.textContent)
//     if (!colorElem) {
//         console.log('Wrong!!!');
//         break;
//
//     } else if (subElement.textContent === 'content 2 segment') {
//         subElement.style.backgroundColor = colorElem;
//     }
// }

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
console.log('k---------------------------------------------------');

// const text = prompt('Введіть текст');
// const elementsContent = document.getElementsByClassName('content_1');
// for (let content of elementsContent) {
//     if (!text) {
//         console.log('Wrong!!!');
//         break;
//
//     } else if (text) {
//         content.innerText = text;
//     }
// }

// l) отримати елементи p та змінити їм padding на 20px
console.log('l---------------------------------------------------');

const pListElements = document.getElementsByTagName('p');
for (let elementP of pListElements) {
    elementP.style.padding = '20px';
}


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
console.log('m---------------------------------------------------');

const text2Elements = document.getElementsByClassName('text2');
for (let text of text2Elements) {
    text.innerText = 'sep-2021';
}