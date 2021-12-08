//
// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
const div = document.getElementsByClassName("elemButton")[0];
const button = document.getElementsByClassName("info")[0];
button.innerText = "Information";
button.style.backgroundColor = 'black';
button.style.color = 'white';
button.onclick = function (e) {
    e.preventDefault();
    const formUserInfo = document.forms.userInfo;
    const formUserValue = document.forms.userValue;
    if (!formUserInfo.userName.value || !formUserInfo.userAge.value || !formUserValue.password.value || !formUserValue.email.value) {
        console.log('Введіть всі дані в форму!');
    } else {
        console.log(formUserInfo.userName.value);
        console.log(formUserInfo.userAge.value);
        console.log(formUserValue.password.value);
        console.log(formUserValue.email.value);
    }
}
div.append(button);

//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
document.write(`<h2>Завдання 2</h2>`);

let input1 = document.createElement("input");
let input2 = document.createElement("input");
let input3 = document.createElement("input");
let inputButton = document.createElement("button");

input1.type = "number";
input2.type = "number";
input3.type = 'text';

inputButton.style.width = '150px';
inputButton.style.height = '25px';
inputButton.style.margin = '20px';
inputButton.innerText = 'Create table';

inputButton.onclick = function () {
    let rows = input1.value;
    let cells = input2.value;
    let text = input3.value;

    function tableGeneration(rowsValue, cellsValue, textValue) {
        const table = document.createElement("table");
        table.style.border = '1px solid black';
        const div = document.createElement("div");
        div.append(table);
        document.body.append(div);

        for (let i = 0; i <= rowsValue; i++) {
            const tr = document.createElement('tr');
            table.append(tr);
            for (let j = 0; j <= cellsValue; j++) {
                const td = document.createElement("td");
                td.innerText = textValue;
                td.style.border = '1px solid black';
                tr.append(td);
            }
        }
    }

    tableGeneration(rows, cells, text);

}


document.body.append(input1, input2, input3, inputButton);
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
document.write(`<h2>Завдання 3</h2>`);

const badWordsArray = ['badWord1', 'badWord2', 'badWord3', 'badWord4', 'badWord5',];

const inputBadWord = document.createElement("input");
const buttonBadWord = document.createElement("button");
inputBadWord.type = 'text';
buttonBadWord.style.width = '150px';
buttonBadWord.style.height = '25px';
buttonBadWord.style.margin = '20px';
buttonBadWord.innerText = 'Check word!!!'


buttonBadWord.onclick = function () {
    const badWord = inputBadWord.value;

    function checkBadWord(word, array) {
        word = word.trim();

        array.forEach((element) => {
            if (element === word) {
                alert(('ATATATA!!! NoNoNo Bad user'));
            }
        });
    }

    checkBadWord(badWord, badWordsArray)
}
document.body.append(inputBadWord, buttonBadWord);

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
document.write(`<h2>Завдання 4</h2>`);

const inputBadWordNew = document.createElement("input");
const buttonBadWordNew = document.createElement("button");

inputBadWordNew.type = 'text';
buttonBadWordNew.style.width = '150px';
buttonBadWordNew.style.height = '25px';
buttonBadWordNew.style.margin = '20px';
buttonBadWordNew.innerText = 'Check sentences!!!';

buttonBadWordNew.onclick = function () {
    const sentence = inputBadWordNew.value.trim();
    console.log(sentence)

    function checkSentences(array, sentenceForChecked) {
        array.forEach((element) => {
            if (sentenceForChecked.includes(element)) {
                alert(('ATATATA!!! NoNoNo Bad user'));
                console.log(element);
            }
        });
    }

    checkSentences(badWordsArray, sentence);
}
document.body.append(inputBadWordNew, buttonBadWordNew);