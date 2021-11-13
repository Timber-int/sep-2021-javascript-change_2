// - Створити змінні. Присвоїти кожному з них значення:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
let i = 3.14;
let j = 2.7;
let k = 16;
let l = true;
let m = false;

console.log(a, b, c, d, e, f, g, h, i, j, k, l, m);

// alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(e);
// alert(f);
// alert(g);
// alert(h);
// alert(i);
// alert(j);
// alert(k);
// alert(l);
// alert(m);

document.write(a, ' ', b, ' ', c, ' ', d, ' ', e, ' ', f, ' ', g, ' ', h, ' ', i, ' ', j, ' ', k, ' ', l, ' ', m, ' ');


// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

a = 1;
b = '12';
c = false;
d = 0;
e = undefined;
f = true;
g = 3.5;
h = 'to';
i = 'row';
j = [1, 2, 3, 4, 5, 6];
k = null;
l = NaN;
m = 15;

console.log(a, b, c, d, e, f, g, h, i, j, k, l, m);

// alert(a);
// alert(b);
// alert(c);
// alert(d);
// alert(e);
// alert(f);
// alert(g);
// alert(h);
// alert(i);
// alert(j);
// alert(k);
// alert(l);
// alert(m);

document.write(a, ' ', b, ' ', c, ' ', d, ' ', e, ' ', f, ' ', g, ' ', h, ' ', i, ' ', j, ' ', k, ' ', l, ' ', m, ' ');

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)

// let firstName = 'Artem';
// let middleName = 'Slobodianyk';
// let lastName = 'Mykhaylovych';
//
// let person = firstName + ' ' + middleName + ' ' + lastName;
// console.log(person);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let firstName = prompt('Введіть ім\'я');
// let lastName = prompt('Введіть По-Батькові');
// let year = prompt('Введіть рік');
//
// alert(`Вітаю ${firstName} ${lastName}. Тобі ${year} років`);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

{
    let a = 100;
    let b = '100';
    let c = true;

    console.log(typeof a, typeof b, typeof c);
}

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
//     5 ? 6 -> true
// 5 ? 6 -> false
// 5 ? 6 -> false
// 5 ? 6 -> false
// 10 ? 10 -> true
// 10 ? 10 -> true
// 10 ? 10 -> false
// 10 ? 10 -> false
// 10 ? 10 -> false
// 123 ? '123' -> false
// 123 ? '123' -> true

console.log(5 < 6);
console.log(5 > 6);
console.log(5 === 6);
console.log(5 == 6);
console.log(10 >= 10);
console.log(10 <= 10);
console.log(10 != 10);
console.log(10 !== 10);
console.log(10 < 10);
console.log(123 === '123');
console.log(123 == '123');



// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// {
//     let str = "20";
//     let a = 5;
//
//
//     document.write("<br/>" + str + a + "<br/>"); // 205 (строка + число)
//     document.write(str - a + "<br/>"); // 15 (виконується перше дія віднімання)
//     document.write(str * "2" + "<br/>"); // 40 (строка множиться на строку однакові типи)
//     document.write(str / 2 + "<br/>");// 10 (строка на число ділення )
// }