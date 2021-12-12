// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
const postsContainer = document.createElement("div");
postsContainer.classList.add('container-posts');

const containerComments = document.createElement("div");
containerComments.classList.add('container-comments');


fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => {
        posts.forEach((post) => {
            const postDiv = document.createElement("div");
            postDiv.classList.add('post-div');
            const postButton = document.createElement("button");
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
                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                    .then((response) => response.json())
                    .then((comments) => {
                        comments.forEach((comment) => {
                            containerComments.classList.toggle('show-comment');
                            containerComments.innerText= '';
                            const commentDiv = document.createElement("div");
                            commentDiv.classList.add('comment-div');
                            commentDiv.classList.toggle('comment-change');

                            for (let commentKey in comment) {
                                const commentKeyDiv = document.createElement("div");
                                commentKeyDiv.classList.add('comment-key');

                                commentKeyDiv.innerText = `${commentKey}: ${comment[commentKey]}`;

                                commentDiv.append(commentKeyDiv);
                            }
                            containerComments.append(commentDiv);
                        });
                    });
            }


            postDiv.append(postButton);
            postsContainer.append(postDiv);
        });
    });
document.body.append(postsContainer);
document.body.append(containerComments);

