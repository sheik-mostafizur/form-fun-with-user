const formInput = document.querySelectorAll("form input");
let password = 0;
formInput[2].addEventListener("keyup", function (e) {
  password = e.target.value.length;
  if (password < 6) {
    this.style.borderColor = "#fa0707";
  } else {
    this.style.borderColor = "#218f28";
  }
});

formInput[3].addEventListener("mouseover", function () {
  if (password < 6) {
    if (this.style.transform === "translate(400px)") {
      this.style.transform = "translate(0px)";
    } else {
      this.style.transform = "translate(400px)";
    }
  } else {
    this.style.transform = "translate(0px)";
  }
});
