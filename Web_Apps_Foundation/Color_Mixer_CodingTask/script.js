const red = document.querySelector("#red_range");
const green = document.querySelector("#green_range");
const blue = document.querySelector("#blue_range");
const finalColor = document.querySelector("#color");
const colorMixer = document.querySelectorAll('input[type="range"]');

colorMixer.forEach(function (bar) {
  bar.addEventListener("input", function () {
    const r = red.value;
    const g = green.value;
    const b = blue.value;
    console.log(b);

    const hexText = document.createTextNode(rgbToHex(r, g, b));
    finalColor.innerHTML = "";
    finalColor.appendChild(hexText);

    document.body.style.background = rgbToHex(r, g, b);
    header.style.background = rgbToHex(r, g, b);
  });
});

function componentToHex(p) {
  let hex = p.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1);
}
