function createArticle() {

	let input = document.getElementById("createTitle"); //1 Getting elemenets from DOM
	let textArea = document.getElementById("createContent");
	let articles = document.getElementById("articles");

	let article = document.createElement("article"); //2 Creating the new elements
	let h3 = document.createElement("h3");
	let p = document.createElement("p");

	if (input.value !== "" && textArea.value !== "") { //4 Creating new elements only if the title and content is not empty
		articles.appendChild(article); //3 Appending the new elements
		article.appendChild(h3);
		article.appendChild(p);

		h3.innerHTML = input.value; //4
		p.innerHTML = textArea.value;
	}


	input.value = ""; //5 After button being pressed - clearing the title value and text value
	textArea.value = "";
}