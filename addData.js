console.log('JavaScript - Ajax');
console.log('Crud Operation - Create');

document.getElementById('add-article').addEventListener('click', function () {
    if (articleTitle && articleContent) {
        const payload = {
            title: articleTitle,
            content: articleContent
        }
    };

    const articleTitle = document.getElementById('article-title').value;
    console.log('articleTitle', articleTitle);

    const articleContent = document.getElementById('article-content').value;
    console.log('articleContent', articleContent);

    console.log('Payload:', payload);
    console.log('Payload Text:', JSON.stringify(payload));

    fetch("https://simple-json-server-scit.herokuapp.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // body data type must match "Content-Type" header
    }).then(getData);
});