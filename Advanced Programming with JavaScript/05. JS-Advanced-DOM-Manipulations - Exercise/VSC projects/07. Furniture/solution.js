function solution() {

    let [generateButton, buyButton] = [...document.querySelectorAll("button")]; //We take our two buttons
    let [inputText, dataOutput] = document.querySelectorAll("textarea")

    generateButton.addEventListener("click", () => { //Generate button
        let parsedData = JSON.parse(inputText.value); //We stringify our table row products from JSON

        parsedData.forEach((product) => { //We itterate through our data
            let { // We take each product
                name,
                img,
                price,
                decFactor,
            } = product;

            let htmlInfo = `<tr>\n  
        <td><img src="${img}"></td>\n
        <td><p>${name}</p></td>\n
        <td><p>${price}</p></td>\n
        <td><p>${decFactor}</p></td>\n
        <td><input type="checkbox" /></td>\n
        </tr>`;

            document.querySelectorAll("tbody")[0].insertAdjacentHTML("beforeEnd", htmlInfo); //We append our received table rows once created 
        });

        inputText.value = ""; //We clear our input
    });

    buyButton.addEventListener("click", () => { //Buy button
        let [products, prices, factors] = [  //We declare the needed information
            [],
            [],
            [],
        ];

        [...document.querySelectorAll("tbody tr")].forEach(tableRow => {

            if (tableRow.querySelectorAll("input")[0].checked) { //We go through all of our check tableRows
                let data = tableRow.querySelectorAll("p"); //We take the checked values from our paragraphs

                products.push(data[0].textContent);  //We push the needed info to the array
                prices.push(Number(data[1].textContent));
                factors.push(Number(data[2].textContent));
            }
        });

        let priceTotal = prices.reduce((sumAcc, num) => sumAcc += num); //Summarize the total price in the acc
        let averageFactor = factors.reduce((avrgAcc, num) => avrgAcc += num) / factors.length; //Summarize the factors in the acc
        dataOutput.textContent = `Bought furniture: ${products.join(", ")}\nTotal price: ${priceTotal.toFixed(2)}\nAverage decoration factor: ${averageFactor}`;
    });
}