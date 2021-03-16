console.log("JavaScript - AJAX");
console.log("CRUD Operation - Read");

const articleListHtml = document.querySelector(".article-list");

document.getElementById("get-data").addEventListener("click", getData);

function getData() {
  fetch("https://simple-json-server-scit.herokuapp.com/posts")
    .then(handleFetchResponse)
    .then(useJSONResponse);
}

function handleFetchResponse(response) {
  console.log("response", response);
  return response.json();
}

function useJSONResponse(json) {
  console.log(json);
  renderArticles(json);
}

function renderArticles(articleList) {
  articleListHtml.innerText = "";

  for (const articleData of articleList) {
    console.log(articleData);
    renderArticle(articleData);
  }
}

function renderArticle(articleData) {
  const article = document.createElement("div");
  const articleTitle = document.createElement("h3");
  const articleContent = document.createElement("p");

  article.appendChild(articleTitle);
  article.appendChild(articleContent);

  articleListHtml.appendChild(article);

  articleTitle.innerText = articleData.title;
  articleContent.innerText = articleData.content;

  fetch(`https://simple-json-server-scit.herokuapp.com/comments?postId=${articleData.id}`)
    .then(handleFetchResponse)
    .then((json) => {
      const commentDiv = document.createElement('div')
      for (const commentData of json){
        const comment = document.createElement('div')
        comment.style.paddingLeft = '20px';
        const user = document.createElement('h4')
        const userComment = document.createElement('p')

        comment.appendChild(user)
        comment.appendChild(userComment)
        commentDiv.appendChild(comment)

        user.innerText = commentData.username;
        userComment.innerText = commentData.content
      }
      article.appendChild(commentDiv)
    })
    

    
   
}
