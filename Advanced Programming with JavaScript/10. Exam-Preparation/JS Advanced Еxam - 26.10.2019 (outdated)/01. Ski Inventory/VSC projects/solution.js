function solve() {

   let nameElementInput = document.getElementsByTagName("input")[1];
   let quantityElementInput = document.getElementsByTagName("input")[2];
   let priceElementInput = document.getElementsByTagName("input")[3];
   let availableProducts = document.getElementsByTagName("ul")[0];

   let addButton = document.getElementsByTagName("button")[1];

   addButton.addEventListener("click", () => {

      let li = document.createElement("li");
      availableProducts.appendChild(li);

      let span = document.createElement("span");
      span.textContent = nameElementInput.value;
      li.appendChild(span);

      let strong = document.createElement("strong");
      strong.textContent = `Available: ${Number(quantityElementInput.value)}`;
      li.appendChild(strong);

      let div = document.createElement("div");
      li.appendChild(div);

      let divStrong = document.createElement("strong");
      divStrong.textContent = Number(priceElementInput.value).toFixed(2);
      div.appendChild(divStrong);

      let divButton = document.createElement("button");
      divButton.textContent = "Add to Client's List";
      div.appendChild(divButton);

      nameElementInput.value = "";
      quantityElementInput.value = "";
      priceElementInput.value = "";
   });

   let inputFilter = document.getElementById("filter");
   let filterButton = document.getElementsByTagName("button")[0];

   filterButton.addEventListener("click", () => {

      Array.from(availableProducts.children).forEach((element) => {
         let productName = element.getElementsByTagName("span")[0];

         if (productName.textContent.toLowerCase().includes(inputFilter.value.toLowerCase())){
            element.style.display = "block";
         } else {
            element.style.display = "none";
         }
      });
   });

   let myProducts = document.getElementsByTagName("ul")[1];
   let totalPriceText = document.getElementsByTagName("h1")[1];
   let totalPriceNumber = 0;

   availableProducts.addEventListener("click", (e) => {
      
      if(e.target.textContent === "Add to Client's List"){
         let productName = e.target.parentNode.parentNode.getElementsByTagName("span")[0].textContent;
         let li = document.createElement("li");
         li.textContent = productName;
         myProducts.appendChild(li);

         let productPrice = e.target.parentNode.getElementsByTagName("strong")[0].textContent; 
         let strong = document.createElement("strong");
         strong.textContent = productPrice;
         li.appendChild(strong);

         totalPriceNumber += Number(productPrice);
         totalPriceText.textContent = `Total Price: ${totalPriceNumber.toFixed(2)}`;

         let availableCountText = e.target.parentNode.parentNode.getElementsByTagName("strong")[0];
         let numberCount = Number(availableCountText.textContent.split(" ")[1]);
         availableCountText.textContent = `Available: ${numberCount - 1}`;

         if(numberCount === 1){
            e.target.parentNode.parentNode.remove();
         }
      }
   });

   let buyButton = document.getElementsByTagName("button")[2];

   buyButton.addEventListener("click", () => {
      totalPriceText.textContent = "Total Price: 0.00";
      myProducts.textContent = "";
   });
}
