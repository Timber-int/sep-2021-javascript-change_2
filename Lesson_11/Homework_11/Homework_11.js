// -створити форму з інпутами для name та age.
//     При відправці форми записати об\'єкт в localstorage
const form = document.createElement("form");
const inputName = document.createElement("input");
const inputAge = document.createElement("input");
const button = document.createElement("button");


inputName.type = 'text';
inputAge.type = 'number';
inputName.name = 'userName';
inputAge.name = 'userAge';
inputName.placeholder = 'Введіть ім\'я';
inputAge.placeholder = 'Введіть вік';

button.style.width = '150px';
button.style.height = '20px';
button.innerText = 'Click here!!!';
button.style.backgroundColor = 'black';
button.style.color = 'white';
button.style.margin = '10px';

button.onclick = function (e) {
    e.preventDefault();

    if (inputName.value.length && inputAge.value.length) {
        const user = {
            name: inputName.value,
            age: inputAge.value,
        };

        let keyUser = Math.random() * 10000;
        keyUser = keyUser - inputAge.value + inputName.value.toUpperCase();

        localStorage.setItem(keyUser.toString(), JSON.stringify(user));
    }
}

form.append(inputName, inputAge, button);
document.body.append(form);


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об\'єкти зберігаються в масиві в локальному сховищі.

const formCar = document.createElement("form");
const inputModel = document.createElement("input");
const inputType = document.createElement("input");
const inputVolume = document.createElement("input");
const buttonCar = document.createElement("button");

inputModel.type = 'text';
inputType.type = 'text';
inputType.type = 'number';

inputModel.placeholder = 'Введіть модель машини'
inputType.placeholder = 'Введіть тип машини'
inputVolume.placeholder = 'Введіть двигун машини';

buttonCar.style.width = '150px';
buttonCar.style.height = '20px';
buttonCar.innerText = 'Click here!!!';
buttonCar.style.backgroundColor = 'black';
buttonCar.style.color = 'white';
buttonCar.style.margin = '10px';

buttonCar.onclick = function (e) {
    e.preventDefault();

    if (inputModel.value.length && inputType.value.length && inputVolume.value.length) {
        const carInfo = [];

        const model = inputModel.value;
        const type = inputType.value;
        const volume = inputVolume.value;

        carInfo.push({model, type, volume});

        let carKey = Math.random() * 10000;
        carKey = carKey + inputModel.value.toUpperCase();

        localStorage.setItem(carKey.toString(), JSON.stringify(carInfo));
    }
}

formCar.append(inputModel, inputType, inputVolume, buttonCar);
document.body.append(formCar);