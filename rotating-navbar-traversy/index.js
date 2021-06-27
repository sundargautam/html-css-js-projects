const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");

const myContainer = document.querySelector(".container");
openButton.addEventListener("click", () => {
  myContainer.classList.add("show-nav");
});

closeButton.addEventListener("click", () => {
    myContainer.classList.remove("show-nav");
  });
  