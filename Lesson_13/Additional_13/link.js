// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
const container = document.getElementById('container-product');
const key = 'Products';
let shop = JSON.parse(localStorage.getItem(key));


const startShop = () => {
    if (!shop) {
        const div = document.createElement("div");
        div.classList.add('empty-div');
        div.innerHTML = `<center><h2>Shop is empty</h2></center>`;

        document.body.append(div);
    } else {
        const buttonDeleteAll = document.createElement("button");

        shop.forEach((product) => {
            const productBox = document.createElement("div");
            const nameBlock = document.createElement("h3");
            const numberBlock = document.createElement('p');
            const priceBlock = document.createElement('p');
            const imageBlock = document.createElement("img");
            const imageDiv = document.createElement("div");
            const buttonDelete = document.createElement("button");

            productBox.classList.add('product-box');
            buttonDelete.classList.add('button-delete');
            buttonDeleteAll.classList.add('button-deleteAll');
            imageBlock.classList.add('image-block');

            nameBlock.innerText = `Name: ${product.name}`;
            numberBlock.innerText = `Number: ${product.number}`;
            priceBlock.innerText = `Price: ${product.price}`;
            imageBlock.src = `${product.image}`;
            buttonDelete.innerText = 'Delete product';
            buttonDeleteAll.innerText = 'Delete all products';

            buttonDelete.onclick = function (e) {
                e.preventDefault();

                deleteProduct(product.id);
            }
            imageDiv.append(imageBlock)
            productBox.append(nameBlock, numberBlock, priceBlock, imageDiv, buttonDelete);
            container.append(productBox);
        });
        buttonDeleteAll.onclick = function (e) {
            e.preventDefault();
            deleteAllProducts();
        }
        container.append(buttonDeleteAll);
    }
}

const deleteAllProducts = () => {
    localStorage.clear();
    container.innerHTML = '';
    container.innerHTML = `<center><h2>Shop is empty</h2></center>`
}

const deleteProduct = (id) => {
    shop = shop.filter((product) => product.id !== id);
    localStorage.setItem(key, JSON.stringify(shop));
    container.innerHTML = '';

    startShop();
}


startShop();