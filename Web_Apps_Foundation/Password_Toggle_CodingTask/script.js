const btn = document.querySelector("#show_hide");
const pw_box = document.querySelector("#pw_input");
console.log(btn.innerText);
console.log(btn.classList);
// console.log(pw_box.textContent);
// console.log(pw_box.attributes);
console.log(pw_box.type);

btn.addEventListener("click", function () {
  if (btn.innerText === "hide password") {
    btn.innerText = "show password";
    pw_box.type = "password";
  } else {
    btn.innerText = "hide password";
    pw_box.type = "text";
  }
});
