const clickBox = document.querySelector("#click_box");
const reset = document.querySelector("#reset");
const counter = document.querySelector("#counter");
let count = 0;

clickBox.addEventListener("click", function () {
  incrementCount(); //hier die Funktion von unten einbaucne
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Space" || event.code === "Enter") {
    count++; // hier auch die Funktion einbauen, um das dann zu sparen
    counter.innerText = count;
  }
  let colorValue = count;
  if (colorValue > 100) {
    colorValue = 0;
  }
  clickBox.style.background = `linear-gradient(90deg, rgb(255, 227, 157) ${colorValue}%, whitesmoke ${colorValue}%)`;
  if ((colorValue = 0)) {
  }
});

reset.addEventListener("click", function () {
  count = 0;
  counter.innerText = count;
  clickBox.style.background = "whitesmoke";
});

function incrementCount() {
  count++;
  counter.innerText = count;
  let colorValue = count;
  if (colorValue > 100) {
    count = 0;
    colorValue = count;
  }
  clickBox.style.background = `linear-gradient(90deg, rgb(255, 227, 157) ${colorValue}%, whitesmoke ${colorValue}%)`;
}
