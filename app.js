const formInput = document.querySelectorAll("form input");

formInput[2].addEventListener("keyup", function (e) {
  const password = e.target.value;
  if (password.length < 6) {
    this.style.borderColor = "#fa0707";
    formInput[3].addEventListener("mouseover", function () {
      console.log(this.style.transform);
      if (this.style.transform === "translate(400px)") {
        this.style.transform = "translate(0px)";
      } else {
        this.style.transform = "translate(400px)";
      }
    });
  } else {
    this.style.borderColor = "#ddd";
  }
});
