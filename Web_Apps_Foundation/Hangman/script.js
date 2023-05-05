// __________________________HANNGMAN________________________________________

const allLetterBtns = document.querySelectorAll("#keyboard button");
const newGameBtn = document.querySelector("#newGameBtn");
const outputBox = document.querySelector("#output-section");
const failBox = document.querySelector("#failCount");
const statusBox = document.querySelector("#Status");

const wordList = [
  "Regex",
  "Boolean",
  "hotpink",
  "dodgerblue",
  "shallowcopy",
  "constructor",
  "createTextNode",
  "JavaScriptObjectNotation",
  "localStorage",
  "papayawhip",
  "borderbox",
];
let newWord;
let hiddenLetter;
let fail = 0;
statusBox.innerText = "ACTIVE";

//---------------Event-Listener--------------------------
newGameBtn.addEventListener("click", function () {
  statusBox.innerText = "ACTIVE";
  fail = 0;
  renderFails(fail);
  newWord = chooseNewWord();
  allLetterBtns.forEach((btn) => (btn.disabled = false));
  renderNewWord();
});

allLetterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    if (fail < 10) {
      if (btn.disabled === true) {
        return; //ist das hier der Richtige ausdruck, um die Aktion nicht weitergehen zu lassen?
      } else if (btn.disabled === false) {
        const pickedLetter = btn.textContent;
        searchAndReplaceLetter(pickedLetter);
        disableBtns(pickedLetter);
      }
    }
    if (fail === 10) {
      setStatus();
    }
  });
});

// -----------------FUNCTIONS------------------------------

function chooseNewWord() {
  newWord = wordList[Math.floor(Math.random() * wordList.length)].toLowerCase();
  return newWord;
}

function renderNewWord() {
  outputBox.innerHTML = "";
  console.log(newWord);
  for (let i = 0; i < newWord.length; i++) {
    hiddenLetter = document.createElement("input");
    hiddenLetter.type = "password";
    hiddenLetter.className = "hiddenLetter";

    hiddenLetter.value = newWord[i];

    outputBox.appendChild(hiddenLetter);
  }
}

function searchAndReplaceLetter(pickedLetter) {
  const allHiddenLetters = document.querySelectorAll(".hiddenLetter");
  let letterFound = false;

  for (let i = 0; i < newWord.length; i++) {
    if (newWord[i] === pickedLetter) {
      allHiddenLetters[i].type = "text";
      letterFound = true;
    }
  }
  if (newWord.includes(pickedLetter) === false) {
    fail++;
    renderFails(fail);
  }
}

function disableBtns(pickedLetter) {
  allLetterBtns.forEach((btn) => {
    if (btn.textContent === pickedLetter) {
      btn.disabled = true;
    }
  });
}

function renderFails(fail) {
  failBox.innerHTML = "";
  const spanFail = document.createElement("span");
  const failText = document.createTextNode(fail);
  spanFail.append(failText);
  failBox.appendChild(spanFail);
}

function setStatus() {
  statusBox.innerText = "";
  const spanStatus = document.createElement("span");
  const statusText = document.createTextNode("FAIL");
  spanStatus.append(statusText);
  statusBox.appendChild(spanStatus);
}
