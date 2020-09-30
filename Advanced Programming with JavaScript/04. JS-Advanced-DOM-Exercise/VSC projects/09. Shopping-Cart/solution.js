function solve() {

   let addBreadElement = document.getElementsByClassName("add-product")[0];
   let addMilkElement = document.getElementsByClassName("add-product")[1];
   let addTomatoesElement = document.getElementsByClassName("add-product")[2];

   let textAreaElement = document.getElementsByTagName("textarea")[0];
   let checkoutElement = document.getElementsByClassName("checkout")[0];

   let totalPrice = 0;
   let shoppingList = [];

   addBreadElement.addEventListener("click", addBreadFunction);
   addMilkElement.addEventListener("click", addMilkFunction);
   addTomatoesElement.addEventListener("click", addTomatoesFunction);
   checkoutElement.addEventListener("click", checkoutFunction);

   function addBreadFunction() {

      let productElement = document.getElementsByClassName("product-title")[0].innerHTML;
      let productPriceElement = Number(document.getElementsByClassName("product-line-price")[0].innerHTML);

      textAreaElement.innerHTML += `Added ${productElement} for ${productPriceElement.toFixed(2)} to the cart.\n`;
      if (!shoppingList.includes(productElement)) {
         shoppingList.push(productElement);
      }

      totalPrice += productPriceElement;
   };

   function addMilkFunction() {

      let productElement = document.getElementsByClassName("product-title")[1].innerHTML;
      let productPriceElement = Number(document.getElementsByClassName("product-line-price")[1].innerHTML);

      textAreaElement.innerHTML += `Added ${productElement} for ${productPriceElement.toFixed(2)} to the cart.\n`;

      if (!shoppingList.includes(productElement)) {
         shoppingList.push(productElement);
      }

      totalPrice += productPriceElement;
   };

   function addTomatoesFunction() {

      let productElement = document.getElementsByClassName("product-title")[2].innerHTML;
      let productPriceElement = Number(document.getElementsByClassName("product-line-price")[2].innerHTML);

      textAreaElement.innerHTML += `Added ${productElement} for ${productPriceElement.toFixed(2)} to the cart.\n`;

      if (!shoppingList.includes(productElement)) {
         shoppingList.push(productElement);
      }

      totalPrice += productPriceElement;
   };

   function checkoutFunction() {
      
      textAreaElement.innerHTML += `You bought ${shoppingList.join(", ")} for ${totalPrice.toFixed(2)}.`;

      addBreadElement.removeEventListener("click", addBreadFunction);
      addMilkElement.removeEventListener("click", addMilkFunction);
      addTomatoesElement.removeEventListener("click", addTomatoesFunction);
      checkoutElement.removeEventListener("click", checkoutFunction);
   };
}