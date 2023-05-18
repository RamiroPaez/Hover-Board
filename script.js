const SQUARES = 400; // screaming snake case
const COLORS = ["#9E0031", "#8E0045", "#8E0045", "#600047", "#44001A"];

const button = document.querySelector(".theme");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    button.innerHTML = "Light Mode";
  } else {
    button.innerHTML = "Dark Mode";
  }
});

const containerEl = document.querySelector("#container");

const tempFragment = document.createDocumentFragment();

for (let i = 0; i < SQUARES; i++) {
  const squareEl = document.createElement("div");

  squareEl.classList.add("square");
  squareEl.addEventListener("mouseover", () => setColor(squareEl));
  squareEl.addEventListener("mouseout", () => removeColor(squareEl));
  tempFragment.appendChild(squareEl);
}

containerEl.appendChild(tempFragment);

function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "var(--secondary-color)";
  element.style.boxShadow = "0 0 2px var(--tertiary-color)";
}
