const pickBtn = document.querySelector("#pickBtn");
const resetBtn = document.querySelector("#reset");
let output = document.querySelector("#numbers");
let clickCount = 0;
resetBtn.disabled = true;
let arrNumbers = Array(49)
  .fill()
  .map((v, i) => ++i);

pickBtn.addEventListener("click", function () {
  if (clickCount < 6) {
    let pNum = document.createElement("p");
    pNum.className = "simpleNumber";

    let randomNumber = pickRandom(0, arrNumbers.length - 1);
    let outputText = document.createTextNode(arrNumbers[randomNumber]);
    arrNumbers.splice([randomNumber], 1);
    pNum.appendChild(outputText);

    output.appendChild(pNum);

    const pickedNumbers = document.querySelectorAll("#numbers p"); //warum muss ich das hier nochmal so schreiben?
    const pickedNumArray = Array.from(pickedNumbers);

    pickedNumArray.sort((a, b) => a.textContent - b.textContent);

    if (pickedNumArray.length === 6) {
      localStorage.setItem("lottoSechser", JSON.stringify(pickedNumArray));
    }

    output.innerHTML = ""; // das finde ich in meinem Code noch komisch, dass ich hier den Outout nochmal leere, den ich gerade eben erst befüllt habe im gleichen Schritt, wegen der Sortierung
    pickedNumArray.forEach((pNum) => {
      output.appendChild(pNum);
    });

    clickCount++;

    // nur Styling "Reinfliegen"
    setTimeout(() => {
      pNum.classList.add("visible");
      100;
      pNum.style.transform = "translateY(0)";
      100;
    });
  }

  if (clickCount === 6) {
    resetBtn.disabled = false;
    pickBtn.disabled = true;
    resetBtn.addEventListener("click", () => {
      clickCount = 0;
      arrNumbers = Array(49)
        .fill()
        .map((v, i) => ++i);
      output.innerHTML = "";
      resetBtn.disabled = true;
      pickBtn.disabled = false;
    });
  }
});

function pickRandom(min, max) {
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;
  return result;
}
