const btnOpen = document.getElementById("open");
const btnClose = document.getElementById("close");

const circle = document.querySelector(".circle");
const container = document.querySelector(".container");

btnOpen.addEventListener("click", (e) => {
  circle.classList.add("rotate");
  container.classList.add("rotate");
});
btnClose.addEventListener("click", (e) => {
  circle.classList.remove("rotate");
  container.classList.remove("rotate");
});
