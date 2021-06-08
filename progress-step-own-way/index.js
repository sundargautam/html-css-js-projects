let index = -1;
const allCircles = Object.freeze({
  circles: document.querySelectorAll(".progress__circle"),
  lines: document.querySelectorAll(".progress__line"),
});
const nextProgress = () => {
  document.querySelectorAll("button")[0].disabled = false;
  if (index <= 1) {
    allCircles.circles[index + 1].classList.add("active");
    allCircles.lines[index + 1].classList.add("active-border");
    if (index == 1) {
      allCircles.circles[index + 2].classList.add("active");
    }
    index++;
  }
};

const previousProgress = () => {
  if (index > -1) {
    allCircles.circles[index + 1].classList.remove("active");
    allCircles.lines[index].classList.remove("active-border");
    if (index == 0) {
      allCircles.circles[index].classList.remove("active");
      document.querySelectorAll("button")[0].disabled = true;
    }
    index--;
  }
};
