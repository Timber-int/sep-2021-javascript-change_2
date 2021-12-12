// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
const usersContainer = document.createElement("div");
usersContainer.classList.add('users-container');


fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
            const userDiv = document.createElement('div');
            const userButton = document.createElement("button");

            userDiv.classList.add('user-div');
            userButton.classList.add('user-button');
            userButton.innerText = "Click";

            userDiv.innerText = `${user.name} ${user.username}`;

            userButton.onclick = function (e) {
                e.preventDefault();
                const postsContainer = document.createElement("div");
                postsContainer.classList.add('posts-container');

                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then((response) => response.json())
                    .then((posts) => {

                        posts.forEach((post) => {
                            const postDiv = document.createElement('div');
                            const postButton = document.createElement("button");

                            postDiv.classList.add('post-div');
                            postButton.classList.add('post-button');
                            postButton.innerText = "Click";

                            for (let postKey in post) {
                                const postKeyDiv = document.createElement("div");
                                postKeyDiv.classList.add('post-key');

                                postKeyDiv.innerText = `${postKey}: ${post[postKey]}`;

                                postDiv.append(postKeyDiv);
                            }

                            postButton.onclick = function (e) {
                                e.preventDefault();
                                const commentsContainer = document.createElement("div");
                                commentsContainer.classList.add('comment-container');

                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
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
                                            commentsContainer.append(commentDiv);
                                            document.body.append(commentsContainer);
                                        });
                                    });
                            }

                            postDiv.append(postButton);
                            postsContainer.append(postDiv);
                            document.body.append(postsContainer);
                        });
                    });
            }

            userDiv.append(userButton);
            usersContainer.append(userDiv);
        });
    });
document.body.append(usersContainer);
