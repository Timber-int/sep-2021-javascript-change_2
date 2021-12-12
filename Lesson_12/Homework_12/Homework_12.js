// 1.
document.write('Завдання 1');
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти.
// Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
const containerPosts = document.createElement("div");
containerPosts.classList.add('containerPosts');
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => {
        posts.forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.classList.add('post-div');

            for (let postKey in post) {
                const postKeyDiv = document.createElement("div");
                postKeyDiv.classList.add('post-key');
                postKeyDiv.innerText = `${postKey}: ${post[postKey]}`;
                postDiv.append(postKeyDiv);
            }
            containerPosts.append(postDiv);
        });
    });

document.body.append(containerPosts);
//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
document.write('Завдання 2');
const containerComments = document.createElement("div");
containerComments.classList.add('container-comments');
fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((comments) => {
        comments.forEach((comment) => {
            const commentDiv = document.createElement("div");
            commentDiv.classList.add('comment-div');

            for (let commentKey in comment) {
                const commentKeyDiv = document.createElement("div");
                commentKeyDiv.classList.add('comment-key');

                commentKeyDiv.innerText = `${commentKey}: ${comment[commentKey]}`;

                commentDiv.append(commentKeyDiv);
            }
            containerComments.append(commentDiv);
        });
    });
document.body.append(containerComments);