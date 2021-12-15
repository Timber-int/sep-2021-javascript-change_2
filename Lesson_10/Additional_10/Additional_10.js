// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// const target = document.body;
// target.onmousedown = function (e) {
//     console.log('Ви вибрали елемент в якого назва тега ->', e.target.localName);
//     if (e.target.classList.length) {
//         for (let i = 0; i < e.target.classList.length; i++) {
//             console.log('Клас клементу ->', e.target.classList[i]);
//         }
//     } else {
//         console.log('Клас відсутній');
//     }
//     if (e.target.id) {
//         console.log('ІД еклементу ->', e.target.id);
//     } else {
//         console.log('Ід відсутнє');
//     }
//
//     console.log('Розмір елементу ->', 'Висота', e.path[0].clientWidth, '*', 'Ширина', e.path[0].clientHeight);
// }

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// const target = document.body;
// const popup = document.createElement("div");
// popup.classList.add('block-popup');
//
// const p1 = document.createElement("p");
// const ul = document.createElement("ul");
// const p3 = document.createElement("p");
// const p4 = document.createElement("p");
// const li = document.createElement("li");
//
// target.onclick = function (e) {
//
//     p1.innerText = `teg: ${e.target.localName}`;
//
//     if (e.target.classList.length) {
//         li.innerText = `Класи > [${e.target.classList}]`;
//         ul.append(li);
//     } else {
//         li.innerText = ('Клас відсутній');
//         ul.append(li);
//     }
//
//     if (e.target.id) {
//         p3.innerText = `id: ${e.target.id}`;
//
//     } else {
//         p3.innerText = `Id is not presented`;
//     }
//
//     p4.innerText = `Розмір елементу -> Висота: ${e.path[0].clientWidth} * Ширина: ${e.path[0].clientHeight}`
//
//     popup.classList.toggle('showPopup');
//     popup.append(p1, ul, p3, p4);
//     document.body.append(popup);
// }

// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
// document.write(`****************************************************************<br>`);
//
//
// const checkBox1 = document.createElement("input");
// const checkBox2 = document.createElement("input");
// const checkBox3 = document.createElement("input");
//
// checkBox1.type = "checkbox";
// checkBox2.type = "checkbox";
// checkBox3.type = "checkbox";
//
// checkBox1.onclick = function () {
//     if (this.checked) {
//         usersWithAddress = usersWithAddress.filter((user) => user.status === false);
//         console.log(usersWithAddress);
//     }
// };
//
// checkBox2.onclick = function () {
//     if (this.checked) {
//         usersWithAddress = usersWithAddress.filter((user) => user.age >= 29);
//         console.log(usersWithAddress);
//     }
// };
//
// checkBox3.onclick = function () {
//     if (this.checked) {
//         usersWithAddress = usersWithAddress.filter((user) => user.address.city === 'Kyiv');
//         console.log(usersWithAddress);
//     }
// };
//
// document.body.append(checkBox1, checkBox2, checkBox3);

// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .
// Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед",
// вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам
// войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему,
//     лежащему с ним на одном уровне

let buttonNext = document.createElement("button");
let buttonPrev = document.createElement("button");

buttonNext.classList.add('button-next');
buttonPrev.classList.add('button-prev');

buttonNext.innerText = "Next";
buttonPrev.innerText = "Prev";



document.body.append(buttonNext, buttonPrev);

function recursiveFunk(startElement) {
    console.log(startElement);

    buttonNext.onclick = function (e) {
        e.preventDefault();
        if (startElement.children.length) {
            for (const element of startElement.children) {
                recursiveFunk(element);
            }
        }
    }
}

recursiveFunk(document.body);

// в процесі

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.

let slideIndex = 1;

showSlides(slideIndex);

currentSlide(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    let slide = document.getElementsByClassName("mySlide");


    if (n > slide.length) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slide.length
    }
    for (let i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    slide[slideIndex - 1].style.display = "block";

}


//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан


document.body.addEventListener("mouseup", function (e) {
    let selection = window.getSelection();
    selection = selection.toString();
    console.log(selection);

    selection = selection.replaceAll(selection.toString(), selection.toString().bold());
    // в процесі
});
