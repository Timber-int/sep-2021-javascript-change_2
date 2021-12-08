// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
document.write('<br>Завдання №1<br>');
const elementDiv = document.createElement('div');
elementDiv.id = 'text';
elementDiv.innerText = 'Hello world!!!';

const button = document.createElement("button");
button.id = 'button';
button.innerText = 'Click here!!!';

button.onclick = function (e) {
    e.preventDefault();
    elementDiv.style.display = 'none';
}

document.body.append(elementDiv, button);
//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
document.write('<br>Завдання №2<br>');

const elementDiv2 = document.createElement('div');
const button2 = document.createElement("button");
button2.innerText = 'Click here!!!';
button2.id = 'button';
button2.onclick = function (e) {
    e.preventDefault();
    button2.style.display = 'none';
}

elementDiv2.append(button2);

document.body.append(elementDiv2);
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на
// кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const formAge = document.forms.formAge;

formAge.onsubmit = function (e) {
    e.preventDefault();
};

formAge.ageButton.onclick = function () {
    const age = formAge.age.value;
    if (!age || age < 0) {
        console.log('Wrong!!!');
    } else if (age >= 0 && age <= 18) {
        console.log(`Ваш вік ${age}`);
    } else console.log('Ваш вік більше 18');
};

// - Создайте меню, которое раскрывается/сворачивается при клике
const menu = document.getElementsByClassName("menu")[0];
menu.style.backgroundColor = 'greenyellow';
const ul = document.getElementsByClassName("exercise")[0];
menu.onclick = function () {
    for (let children of menu.children) {
        children.classList.toggle('noneContent');
    }
}

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
document.write('<br>Завдання №5<br>');

const comments = [
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
    {title: 'lorem', body: 'lorem ipsum dolo sit ameti'},
];
const container = document.createElement('div');


comments.map((comment) => {
    const commentBlock = document.createElement('div');

    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const button = document.createElement("button");
    button.classList.add('commentButton');
    button.innerText = 'Click here!!!';

    h2.innerText = comment.title;
    p.innerText = comment.body;

    button.onclick = function (e) {
        e.preventDefault();
        p.innerText = '';
    };

    commentBlock.append(h2, p, button);
    container.append(commentBlock);
});

document.body.append(container);

