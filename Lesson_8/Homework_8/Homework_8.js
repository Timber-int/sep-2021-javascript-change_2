// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
console.log('-----------------------------------------');
let idListContent = document.getElementById('content');
console.log(idListContent.textContent);
// -- отримує текст з блоку з id "rules"
console.log('-----------------------------------------');
let idListRules = document.getElementById('rules');
console.log(idListRules.textContent);
// -- замініть текст параграфа з id 'content' на будь-який інший
idListContent.innerText = 'Hello word';
// -- замініть текст параграфа з id 'rules' на будь-який інший
idListRules.innerHTML = `<div>Bay word</div>`;
// -- змініть кожному елементу колір фону на червоний
idListContent.style.backgroundColor = 'red';

let newElementDiv;
let newElementUl;
let newElementLi;

let allElementsDiv = document.getElementsByTagName('div');
for (let elementDiv of allElementsDiv) {
    newElementDiv = elementDiv;
    elementDiv.style.backgroundColor = 'red';
}

let allElementsUl = document.getElementsByTagName('ul');
for (let elementUl of allElementsUl) {
    newElementUl = elementUl;
    elementUl.style.backgroundColor = 'red';
}

let allElementsLi = document.getElementsByTagName('li');
for (let elementLi of allElementsLi) {
    newElementLi = elementLi;
    elementLi.style.backgroundColor = 'red';
}

// -- змініть кожному елементу колір тексту на синій
idListContent.style.color = 'blue';
newElementDiv.style.color = 'blue';
newElementUl.style.color = 'blue';
newElementLi.style.color = 'blue';


// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log('-----------------------------------------');
console.log(idListRules.classList.value);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
console.log('-----------------------------------------');

let fcRules = document.getElementsByClassName('fc_rules');
for (let rule of fcRules){
    rule.style.color = 'orange';
}

