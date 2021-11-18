// - створити функцію яка обчислює та повертає площу прямокутника висотою
{
    console.log('----------------------------------------------');

    function squareRectangle(a, b) {

        let square;

        square = a * b;

        return square;
    }

    console.log('Square =', squareRectangle(11, 5));
}
// - створити функцію яка обчислює та повертає площу кола
{
    console.log('----------------------------------------------');

    function squareCircle(a) {

        let square;

        square = Math.PI * Math.pow(a, 2);

        return square;
    }

    console.log('Square =', squareCircle(11));
}
// - створити функцію яка обчислює та повертає площу циліндру
{
    console.log('----------------------------------------------');

    function squareCylinder(r, h) {

        let square;

        square = (2 * Math.PI * r * h) + (2 * Math.PI * Math.pow(r, 2));

        return square;
    }

    console.log('Square =', squareCylinder(11, 12));
}
// - створити функцію яка приймає масив та виводить кожен його елемент
{
    console.log('----------------------------------------------');

    function funcArray(array) {
        let arrayElement;
        for (let i = 0; i < array.length; i++) {
            arrayElement = array[i];
            console.log(arrayElement);
        }
    }

    funcArray([12, 4, 6, 78, 9, 65, 4, 3, 2]);

}
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
{
    document.write('----------------------------------------------');

    function paragraph(text) {
        document.write(`<p>${text}</p>`);
    }

    paragraph('Hello word');
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
{
    document.write('----------------------------------------------');

    function ulAndLi(text) {
        document.write(`
<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`);
    }

    ulAndLi('Hello word');
}
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
{
    document.write('----------------------------------------------');

    function ulAndArgumentLI(text, li) {

        document.write(`<ul>`);
        for (let i = 0; i < li; i++) {
            document.write(`<li>${text}</li>`)
        }
        document.write(`</ul>`);

    }

    ulAndArgumentLI('Hello word', 6);
}
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
{
    document.write('----------------------------------------------');

    function primitiveElements(array) {
        for (let i = 0; i < array.length; i++) {
            document.write(`<div>${i + 1}. ${array[i]} </div>`);
        }
    }

    primitiveElements(['1', 2, '3', true, false, 4, Boolean(4), Boolean({}), 'false', 0]);
}
//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
{
    document.write('----------------------------------------------');

    function massObject(array) {
        for (let i = 0; i < array.length; i++) {
            document.write(`<br>`)
            document.write(`<div>${array[i].id} ${array[i].name} ${array[i].age}</div>`);
        }

    }

    massObject([
        {id: 1, name: 'Tim', age: 10},
        {id: 2, name: 'Bim', age: 40},
        {id: 3, name: 'Jim', age: 44}
    ]);
}