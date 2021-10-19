const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");

// question.forEach((element) => {
//   element.addEventListener("click",showAnswer);
// });

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", () => {
    // if (answer[i].style.height === "0") {
    //   answer.forEach((element) => {
    //     element.style.display = "none";
    //   });
    //   question.forEach((element) => {
    //     element.style.color = "hsl(240, 6%, 50%)";
    //     element.style.fontWeight = "400";
    //   })
    //   question[i].style.fontWeight = "700";
    //   question[i].style.color = "#000";


    //   answer[i].style.height = "auto";
    // } else {
    //   question[i].style.fontWeight = "400";
    //   question[i].style.color = "hsl(240, 6%, 50%)";
    //   answer[i].style.display = "none";
    // }
    if(!answer[i].classList.contains("showAnswer")) {
      question.forEach((element) => element.classList.remove("activeQuestion"));
      answer.forEach((element) => element.classList.remove("showAnswer"));

      answer[i].classList.toggle("showAnswer");
      question[i].classList.toggle("activeQuestion")
    } else {
      answer[i].classList.toggle("showAnswer");
      question[i].classList.toggle("activeQuestion")
    }
  });
}
