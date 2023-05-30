const btnOpen = document.getElementById("open");
const circle = document.querySelector(".circle");
const container = document.querySelector(".container");
btnOpen.addEventListener("click", (e) => {
  circle.classList.add("rotate");
  container.classList.add("rotate");
});
