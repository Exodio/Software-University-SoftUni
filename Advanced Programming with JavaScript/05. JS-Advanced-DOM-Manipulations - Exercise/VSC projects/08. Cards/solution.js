function solve() {

   let playerOneЕlement = document.getElementById("player1Div");
   let playerTwoElement = document.getElementById("player2Div");

   let historyElement = document.getElementById("history");
   let resultElement = document.getElementById("result").children;

   let playrOneCards = "";
   let playerTwoCards = "";

   [playerOneЕlement, playerTwoElement].map(player => player.addEventListener("click", function(cards) {

      if (cards.target.name === undefined) {

         return "";
      }

      player === playerOneЕlement ? playrOneCards = displayCards(playrOneCards, resultElement[0], cards) : playerTwoCards = displayCards(playerTwoCards, resultElement[2], cards);

      if (resultElement[0].textContent !== "" && resultElement[2].textContent !== "") {
         Number(playrOneCards.name) > Number(playerTwoCards.name) ? createBorders(playrOneCards, playerTwoCards) : createBorders(playerTwoCards, playrOneCards);

         saveHistory();
         clearValues();
      }
   }));

   function displayCards(player, span, card) {
      card.target.src = "images/whiteCard.jpg";
      span.textContent = card.target.name;
      player = card.target;

      return player;
   }

   function createBorders(firstCard, secondCard) {
      firstCard.style.border = "2px solid green";
      secondCard.style.border = "2px solid red";
   }

   function saveHistory() {
      historyElement.textContent += `[${playrOneCards.name} vs ${playerTwoCards.name}] `;
   }

   function clearValues() {
      resultElement[0].textContent = "";
      resultElement[2].textContent = "";
      playrOneCards = "";
      playerTwoCards = "";
   }
}