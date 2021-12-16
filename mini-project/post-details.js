const url = new URL(location);

const post = JSON.parse(url.searchParams.get('post'));

const postContainer = document.createElement("div");
postContainer.classList.add('post-container');

for (let postKey in post) {
    const postBox = document.createElement("div");
    postBox.classList.add('post-box');

    postBox.innerText = `${postKey}: ${post[postKey]}`;
    postContainer.append(postBox);
}
const commentContainer = document.createElement("div");
commentContainer.classList.add('comment-container');

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then((response) => response.json())
    .then((comments) => {
        comments.forEach((comment) => {
            const commentBox = document.createElement("div");
            commentBox.classList.add('comment-box');
            for (let commentKey in comment) {
                const commentElement = document.createElement("div");

                commentElement.innerText = `${commentKey}: ${comment[commentKey]}`;

                commentBox.append(commentElement);
                commentContainer.append(commentBox);
            }
        });
    });

document.body.append(postContainer, commentContainer);