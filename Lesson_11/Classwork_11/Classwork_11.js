// localStorage.clear();
// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні
// на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.
const userContainer = document.createElement("div");
userContainer.classList.add("user-container");

const superButton = document.createElement("button");
superButton.classList.add("button-favorite-page");
superButton.innerText = 'Клікніть щоб переглянути обраних юзерів';

const favorites = [];
users.map((user) => {
    const userButton = document.createElement("button");
    const div = document.createElement("div");

    div.classList.add('user-box');
    userButton.classList.add("user-button");

    userButton.innerText = "додати до улюблених";

    for (let userKey in user) {
        div.append(`${userKey}: ${user[userKey]} `, userButton);
    }

    userButton.onclick = function (e) {
        e.preventDefault();

        if (favorites.includes(user) === false) {
            favorites.push(user);
            localStorage.setItem('favorite', JSON.stringify(favorites));
        }

    };
    userContainer.append(div);
});
console.log(localStorage.length)

superButton.onclick = function (e) {
    e.preventDefault();

    location.href = 'favorites.html';
};

userContainer.append(superButton);
document.body.append(userContainer);
