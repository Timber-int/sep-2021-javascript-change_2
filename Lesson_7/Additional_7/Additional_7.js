// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
console.log('--------------------------------------------------------');

class User {
    constructor(id,
                name,
                username,
                email,
                address,
                street,
                suite,
                city,
                zipcode,
                geo,
                lat,
                lng,
                phone,
                website,
                company,
                companyName,
                catchPhrase,
                bs) {

        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;

        this.address = {street, suite, zipcode, geo}
        this.address.street = street;
        this.address.suite = suite;
        this.address.city = city;
        this.address.zipcode = zipcode;

        this.geo = {lat, lng};
        this.address.geo.lat = lat;
        this.address.geo.lng = lng;

        this.company = {companyName, catchPhrase, bs}
        this.company.companyName = companyName;
        this.company.catchPhrase = catchPhrase;
        this.company.bs = bs;
        this.phone = phone;
        this.website = website;
    }

}

const user1 = new User(1, 'Leanne Graham', 'Bret',
    'Sincere@april.biz', {}, 'Kulas Light', 'Apt. 556',
    'Gwenborough', '92998-3874', {}, '-37.3159', '81.1496',
    '1-770-736-8031 x56442', 'hildegard.org', {}, 'Romaguera-Crona',
    'Multi-layered client-server neural-net', 'harness real-time e-markets');

console.log(user1)


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

function TagsDescription(titleOfTag, action, attrs = [], titleOfAttr, actionOfAttr) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = [titleOfAttr, actionOfAttr];
    this.attrs.titleOfAttr = titleOfAttr;
    this.attrs.actionOfAttr = actionOfAttr;
}

const tagA = new TagsDescription('area',
    `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`, '',
    'accesskey','Переход к области с помощью комбинации клавиш'
);

console.log(tagA);