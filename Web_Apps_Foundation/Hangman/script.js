// __________________________HANNGMAN________________________________________

const allLetterBtns = document.querySelectorAll("#keyboard"); // hiermit alle Buttons wieder disables=false machen, sobald Btn NewGame gedrückt wird
const newGameBtn = document.querySelector("#newGameBtn");
const outputBox = document.querySelector("#output-section");

const wordList = [
  "Test",
  "Tadel",
  "topfen",
  "Tiger",
  "Tulpe",
  "Tanz",
  "Trut-Hahn",
  "Trikot",
];
let newWord;

//---------------Event-Listener--------------------------
newGameBtn.addEventListener("click", function () {
  //able all Btns
  newWord = chooseNewWord();
  console.log(newWord);
  renderNewWord();
});

allLetterBtns.addEventListener("click", function () {
  //check if geklickter letter ist in word
});

// -----------------FUNCTIONS------------------------------

function chooseNewWord() {
  newWord = wordList[Math.floor(Math.random() * wordList.length)];
  return newWord;
}

function renderNewWord() {
  outputBox.innerHTML = "";

  const newDiv = document.createElement("span");
  const word = document.createElement("div");
  word.innerText = newWord;
  newDiv.append(word);

  outputBox.appendChild(newDiv);
}

function searchLetter() {
  allLetterBtns.forEach((btn) => {
    if (btn.checked && newWord.includes(btn.value) === true) {
      //disable Btn bis neues Word
      //ersetze placeholder mit Buchstaben
    } else if (btn.checked && newWord.includes(btn.value) === false) {
      const fail = Number++; /// hier muss eine Zahl hochzählen
    }
  });
}

function disableBtn() {}

function replaceWithLetters() {}

function countFail() {
  //count bei jedem Fail der searchLetter FUnktion
}

function failToLoose() {
  //bei 10 fails abbruch
}
