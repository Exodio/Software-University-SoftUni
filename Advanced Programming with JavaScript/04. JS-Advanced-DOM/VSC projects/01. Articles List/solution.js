// function createArticle() {

// 	let titleElement = document.getElementById("createTitle"); //1 Getting elemenets from DOM
// 	let textAreaElement = document.getElementById("createContent");
// 	let articlesElement = document.getElementById("articles");

// 	let articleElement = document.createElement("article"); //2 Creating the new elements
// 	let h3Element = document.createElement("h3");
// 	let pElement = document.createElement("p");

// 	if (titleElement.value !== "" && textAreaElement.value !== "") { //4 Creating new elements only if the title and content is not empty
// 		articlesElement.appendChild(articleElement); //3 Appending the new elements
// 		article.appendChild(h3Element);
// 		article.appendChild(pElement);

// 		h3.innerHTML = titleElement.value; //4
// 		p.innerHTML = textAreaElement.value;
// 	}


// 	titleElement.value = ""; //5 After button being pressed - clearing the title value and text value
// 	textAreaElement.value = "";
// }

function createArticle() {

	let titleInputElement = document.getElementById("createTitle");
	let contentInputElement = document.getElementById("createContent");

	let h3Element = document.createElement("h3");
	h3Element.innerHTML = titleInputElement.value;

	let pElement = document.createElement("p");
	pElement.innerHTML = contentInputElement.value;

	let articleElement = document.createElement("article");
	articleElement.appendChild(h3Element);
	articleElement.appendChild(pElement);

	let articleSectionElement = document.getElementById("articles");
	articleSectionElement.appendChild(articleElement);

	titleInputElement.value = "";
	contentInputElement.value = "";
}