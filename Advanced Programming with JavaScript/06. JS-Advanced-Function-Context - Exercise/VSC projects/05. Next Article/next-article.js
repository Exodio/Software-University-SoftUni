function getArticleGenerator(articles) {

    let contentElement = document.getElementById("content"); //We locate the listed content
    let elementsCount = 0; //We initialize how many elements we showed on the webpage

    return function checkArticles() { //We create a return function

        if (elementsCount < articles.length) { //Until we have more articles we will continue checking
            let articleElement = document.createElement("article"); //As we have new article a new row needs to be created for it

            articleElement.textContent = articles[elementsCount]; //We make the article into a text and we add elementsCount in order to move to the next available article
            contentElement.appendChild(articleElement); //We add the article to the html

            elementsCount++; //We incrase the initial elements as we are minus 1 article
        }
    }
}