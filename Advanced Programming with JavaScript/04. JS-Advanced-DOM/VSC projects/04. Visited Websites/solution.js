// function solve() {

//   let allLinks = document.querySelectorAll("a");
//   let allVisits = document.querySelectorAll("p");

//   for (let i = 0; i < allLinks.length; i++) {
//     visitorsUpdateClick(allLinks[i], allVisits[i]);
//   }


//   function visitorsUpdateClick(link, visit) {

//     link.addEventListener("click", function () {
//       let clickCounter = Number(visit.innerHTML.replace(/\D+/g, ""));

//       visit.innerHTML = `visited ${++clickCounter} times`;
//     });
//   }
// }
function solve() {

  let linkElements = document.querySelectorAll("link-1 a");

  for (const linkElement of linkElements) {
    linkElement.addEventListener("click", onLinkElementClick);
  }

  function onLinkElementClick(event) {
    let paragraphElement = event.currentTarget.nextElementSibling;
    let visitedCounter = Number(paragraphElement.innerText.split(" ")[1]);

    visitedCounter++;

    paragraphElement.innerText = `visited ${visitedCounter} times`;
  }
}