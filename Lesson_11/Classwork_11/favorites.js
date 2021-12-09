const div = document.createElement("div");
div.classList.add('favorite-container');

const favorite = localStorage.getItem("favorite");

if (favorite) {
    const parseFavorites = JSON.parse(favorite);
    console.log(parseFavorites);

    parseFavorites.forEach((element) => {
        const divFavorites = document.createElement("div");
        divFavorites.classList.add('favorite-user');
        for (let parseFavoritesKey in element) {
            divFavorites.append(`${parseFavoritesKey}: ${element[parseFavoritesKey]} `);

        }
        div.append(divFavorites);
    });
} else {
    div.innerText = "Немає обраних користувачів!";
}
document.body.append(div);
