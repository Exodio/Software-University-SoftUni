function solve() {

  let quizzie = document.getElementById("quizzie");
  let section = document.getElementsByTagName("section");
  let result = document.getElementsByClassName("results-inner")[0];

  let steps = 0;
  let answers = 0;
  let rightAnswers = ["onclick", "JSON.stringify()", "A programming API for HTML and XML documents"];

  quizzie.addEventListener("click", (e) => {

    if (e.target.className === "answer-text") {
      section[steps].style.display = "none";
      steps++;

      if (rightAnswers.includes(e.target.innerHTML)) {
        answers++;
      }

      if (rightAnswers.length > steps) {
        section[steps].style.display = "block";
      }

      if (steps === 3) {
        document.getElementById("results").style.display = "block";
        result.textContent = rightAnswers.length === answers ? "You are recognized as top JavaScript fan!" : `You have ${answers} right answers`;
      }
    }
  });
}