const buttons = document.querySelectorAll(".experience-header button");
const educationBody = document.querySelector(".education-body");
const experienceBody = document.querySelector(".experience-body");

buttons.forEach(function (currentValue) {
  currentValue.addEventListener("click", function () {
    const buttonText = this.innerText;

    //reset all styles
    buttons.forEach(function (buttonValue) {
      buttonValue.style.backgroundColor = "#fff";
      buttonValue.style.border = "1px solid #929292";
    });

    //Set styles fot selected button
    currentValue.style.backgroundColor = "#f1f1f1";
    currentValue.style.border = "1px solid #000";

    if (buttonText === "Experience") {
      educationBody.style.display = "none";
      experienceBody.style.display = "block";
    } else if (buttonText === "Education") {
      educationBody.style.display = "block";
      experienceBody.style.display = "none";
    }
  });
});
