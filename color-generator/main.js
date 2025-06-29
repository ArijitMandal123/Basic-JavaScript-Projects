const colors_contaner = document.querySelectorAll(".color-container");
const body = document.querySelector("body");
const random_color = document.querySelector("#random-color");
const colors = [
  "#282828",
  "#f0f0f0",
  "rgb(255, 0, 0)",
  "rgb(0, 255, 123)",
  "rgb(0, 0, 255)",
  "rgb(229, 229, 55)",
  "rgb(0, 255, 255)",
  "rgb(255, 0, 255)",
];

colors_contaner.forEach((color, idx) => {
  color.style.backgroundColor = colors[idx];
  color.addEventListener("click", () => {
    body.style.backgroundColor = colors[idx];
  });
});

random_color.addEventListener("click", () => {
  const randomcolor =
    "rgb(" +
    Math.floor(Math.random() * 254) +
    ", " +
    Math.floor(Math.random() * 254) +
    ", " +
    Math.floor(Math.random() * 254) +
    ")";
  random_color.style.backgroundColor = randomcolor;
  const text = random_color.children[0];
  text.innerText = randomcolor;
  body.style.backgroundColor = randomcolor;
});
