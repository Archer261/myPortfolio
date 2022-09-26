const hamburgerBtn = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");
const projectCard = document.getElementsByClassName("project-card");
const submit = document.getElementById("submit-btn");
const inputFields = document.querySelectorAll("input");
const submitRequest = document.getElementById("submit-request");

function toggleNav() {
  navList.classList.toggle("show");
}

function toggleThanks() {
  submitRequest.style.display = "flex";
  for (var i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value) {
      inputFields[i].value = "";
    }
  }
  setTimeout(function () {
    submitRequest.style.display = "none";
  }, 5000);
}

hamburgerBtn.addEventListener("click", toggleNav);
submit.addEventListener("click", toggleThanks);
