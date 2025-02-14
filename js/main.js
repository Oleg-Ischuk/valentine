document.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.querySelector(".yes");

  yesButton.addEventListener("click", function () {
    let answers = JSON.parse(localStorage.getItem("answers")) || [];

    answers.push("Yes");

    localStorage.setItem("answers", JSON.stringify(answers));
  });
});
