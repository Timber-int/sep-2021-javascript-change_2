let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
console.log('-----------------------------------------------------------');
const array = [];
users.forEach((user) => {
    const newArray = [];

    for (let addressKey in user.address) {
        newArray.push(`${addressKey}: ${user.address[addressKey]}`);
    }
    array.push(newArray);
});
console.log(array);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
console.log('-----------------------------------------------------------');
const div = document.createElement("div");
users.forEach((user) => {
    let newDiv = document.createElement("div");
    newDiv.append(user.name, ' ', user.age, ' ', user.status, ' ', user.address.city, ' ', user.address.country, ' ',
        user.address.street, ' ', user.address.houseNumber);
    div.append(newDiv);
});
document.body.append(div);
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)

users.forEach((user) => {
    let newDiv = document.createElement("div");
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let ul = document.createElement('ul');


    div1.innerText = user.name;
    div2.innerText = user.age;
    div3.innerText = user.status;

    for (let userKey in user.address) {
        let li = document.createElement('li');
        li.innerText = `${user.address[userKey]}`;
        ul.append(li);
    }

    document.write('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    newDiv.append(div1, div2, div3, ul);
    document.body.append(newDiv);
});


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
//
// users.forEach((user) => {
//     let newDiv = document.createElement("div");
//     let div1 = document.createElement("div");
//     let div2 = document.createElement("div");
//     let div3 = document.createElement("div");
//     let ul = document.createElement('ul');
//
//     div1.innerText = user.name;
//     div2.innerText = user.age;
//     div3.innerText = user.status;
//
//     for (let userKey in user.address) {
//         let li = document.createElement('li');
//         li.innerText = `${user.address[userKey]}`;
//         ul.append(li);
//     }
//
//     document.write('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
//     newDiv.append(div1, div2, div3, ul);
//     document.body.append(newDiv);
// });

// Масив

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи.
// Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
//     який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
const content = document.getElementById('content');
const ul = document.createElement('ul');
const ruleTitle = document.getElementsByClassName('rules');
for (let ruleElement of ruleTitle) {
    const li = document.createElement("li");
    li.innerText = ruleElement.firstElementChild.textContent;
    ul.append(li);
}
content.append(ul);

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html


for (let i = 0; i < rules.length; i++) {
    let wrap = document.getElementById('wrap');
    let div = document.createElement("div");
    div.classList.add("rules", "rule", `${i + 1}`)
    let h2 = document.createElement("h2");
    let p = document.createElement("p");

    h2.innerText = rules[i].title;
    p.innerText = rules[i].body;


    div.append(h2, p);
    wrap.append(div);
}

