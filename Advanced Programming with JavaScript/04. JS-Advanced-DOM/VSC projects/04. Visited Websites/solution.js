function solve() {

  let allLinks = document.querySelectorAll("a");
  let allVisits = document.querySelectorAll("p");

  for (let i = 0; i < allLinks.length; i++) {
    visitorsUpdateClick(allLinks[i], allVisits[i]);
  }

  
  function visitorsUpdateClick(link, visit) {

    link.addEventListener("click", function () {
      let clickCounter = Number(visit.innerHTML.replace(/\D+/g, ""));

      visit.innerHTML = `visited ${++clickCounter} times`;
    });
  }
}