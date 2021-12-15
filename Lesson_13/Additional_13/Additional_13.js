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
// localStorage.clear()

const {productName, productNumber, productPrice, productImage} = document.getElementById('formMarket');
const shopButton = document.getElementById('shopButton');
const key = 'Products';

const productSave = (name, number, price, image) => {
    const shop = JSON.parse(localStorage.getItem(key)) || [];

    shop.push({id: new Date().getTime() + name.toUpperCase(), name, number, price, image});
    localStorage.setItem(key, JSON.stringify(shop));
}

shopButton.onclick = function (e) {
    e.preventDefault();

    productSave(productName.value, productNumber.value, productPrice.value, productImage.value);
}
document.body.append(shopButton);