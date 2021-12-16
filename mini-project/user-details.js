const url = new URL(location);
const user = JSON.parse(url.searchParams.get('user'));

const userContainer = document.createElement("div");
userContainer.classList.add('user-container');
const postsContainer = document.createElement("div");
postsContainer.classList.add('posts-container');

const elementId = document.createElement("div");
const elementName = document.createElement("div");
const elementUserName = document.createElement("div");
const elementEmail = document.createElement("div");
const elementAddress = document.createElement("div");
const elementPhone = document.createElement("div");
const elementWebsite = document.createElement("div");
const elementCompany = document.createElement("div");

const elementAddressStreet = document.createElement("div");
const elementAddressSuite = document.createElement("div");
const elementAddressCity = document.createElement("div");
const elementAddressZipCode = document.createElement("div");
const elementAddressGeo = document.createElement("div");

const elementGeoLat = document.createElement("div");
const elementGeoLng = document.createElement("div");

const elementCompanyName = document.createElement("div");
const elementCompanyCatchPhrase = document.createElement("div");
const elementCompanyBs = document.createElement("div");

const buttonPostUser = document.createElement("button");
buttonPostUser.classList.add('button-postUser');
buttonPostUser.innerText = `Post of current user`;

elementId.innerText = `Id: ${user.id}`;
elementName.innerText = `Name: ${user.name}`;
elementUserName.innerText = `Username: ${user.username};`
elementEmail.innerText = `Email: ${user.email}`;
elementAddress.innerText = 'Address:';
elementPhone.innerText = `Phone: ${user.phone}`;
elementWebsite.innerText = `Website: ${user.website}`;
elementCompany.innerHTML = 'Company:';

elementAddressStreet.innerText = `Street: ${user.address.street}`;
elementAddressSuite.innerText = `Suite: ${user.address.suite}`;
elementAddressCity.innerText = `City: ${user.address.city}`;
elementAddressZipCode.innerText = `Zipcode: ${user.address.zipcode}`;
elementAddressGeo.innerText = 'Geo:';

elementGeoLat.innerText = `Lat: ${user.address.geo.lat}`;
elementGeoLng.innerText = `Lng: ${user.address.geo.lng}`;

elementCompanyName.innerText = `Name: ${user.company.name}`;
elementCompanyCatchPhrase.innerText = `CatchPhrase:${user.company.catchPhrase}`;
elementCompanyBs.innerText = `Bs: ${user.company.bs}`;


buttonPostUser.onclick = function (e) {
    e.preventDefault();
    postsContainer.innerHTML = '';
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then((response) => response.json())
        .then((posts) => {
            posts.forEach((post) => {

                const postBox = document.createElement("div");
                postBox.classList.add('post-box');

                const elementTitle = document.createElement("div");
                elementTitle.innerText = `Tittle: ${post.title}`;

                const postButton = document.createElement("button");
                postButton.classList.add('post-button');
                postButton.innerText = 'Comments of current post';

                postButton.onclick = function (e) {
                    e.preventDefault();
                    location.href = `post-details.html?post=${JSON.stringify(post)}`;
                }

                postBox.append(elementTitle, postButton);
                postsContainer.append(postBox);
            });
        });
}


elementCompany.append(elementCompanyName, elementCompanyCatchPhrase, elementCompanyBs);
elementAddressGeo.append(elementGeoLat, elementGeoLng);
elementAddress.append(elementAddressStreet, elementAddressSuite, elementAddressCity, elementAddressZipCode, elementAddressGeo);
userContainer.append(elementId, elementName, elementUserName, elementEmail, elementAddress, elementPhone, elementWebsite, elementCompany);
document.body.append(userContainer, buttonPostUser, postsContainer);