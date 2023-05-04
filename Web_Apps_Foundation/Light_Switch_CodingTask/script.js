const btn = document.querySelector("#toggle-button");
const body = document.querySelector("body");
document.title = "Light ON";
console.log(btn.classList);

btn.addEventListener("click", function (e) {
  btn.classList.toggle("active");
  if (body.style.backgroundColor === "rgb(46, 15, 44)") {
    body.style.backgroundColor = "rgb(255, 227, 157)";
  } else {
    body.style.backgroundColor = "rgb(46, 15, 44)";
  }
  if (document.title === "Light OFF") {
    document.title = "Light ON";
  } else {
    document.title = "Light OFF";
  }
});
