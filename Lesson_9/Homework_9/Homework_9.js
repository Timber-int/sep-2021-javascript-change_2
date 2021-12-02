// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
const block = document.createElement("div");
block.classList.add('wrap', 'collapse', 'alpha', 'beta');
block.innerText = 'Hello word';
block.style.color = 'lightskyblue';
block.style.fontSize = '20px'
document.body.appendChild(block);

const cloneBlock = block.cloneNode(true);
document.body.appendChild(cloneBlock.cloneNode(true));
document.body.appendChild(cloneBlock.cloneNode(true));
document.body.appendChild(cloneBlock.cloneNode(true));
document.body.appendChild(cloneBlock.cloneNode(true));

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
const array = ['Main', 'Products', 'About us', 'Contacts'];

const ul = document.getElementsByClassName('menu');

for (let i = 0; i < array.length; i++) {
    let li = document.createElement('li');
    li.innerText = array[i];

    ul[0].appendChild(li);
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

coursesAndDurationArray.forEach((elem) => {
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    let div = document.createElement("div");
    h1.innerText = elem.title;
    h2.innerText = elem.monthDuration;

    div.append(h1, h2);
    document.body.appendChild(div);
});
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
document.write('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');


coursesAndDurationArray.forEach((elem) => {
    const color1 = Math.random() * 2550;
    const color2 = Math.random() * 255;
    const color3 = Math.random() * 255;

    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");

    div.classList.add('item');
    h1.classList.add('heading');
    p.classList.add('description');

    h1.innerText = elem.title;
    p.innerText = elem.monthDuration;

    div.style.background = `rgb(${color3},${color2},${color1})`
    h1.style.color = `rgb(${color1},${color2},${color3})`;
    p.style.color = `rgb(${color2},${color1},${color3})`;


    div.appendChild(h1);
    h1.appendChild(p);

    document.body.appendChild(div);
});