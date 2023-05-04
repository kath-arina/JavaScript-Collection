//_________________________ToDo-App__________________________

//ToDo Class
class ToDo {
  constructor() {
    this.id = Date.now();
    this.name = "";
    this.done = false;
  }
}

const Test = {
  //rausschmeißen
  id: 1,
  name: "BUUU",
  done: true,
};

const toDoList = [Test];

//Selektoren
const addToDo = document.querySelector("#addBtn");
const deleteToDo = document.querySelector("#deleteBtn");
const allRadios = document.querySelectorAll('input[name="Filter"]');

const inputBox = document.querySelector("#toDo-Input");
const ulistOfToDos = document.querySelector("#toDo-List");

// -----------------------Event-Listener--------------------

addToDo.addEventListener("click", function () {
  createNewToDo();
  renderToDos();
  inputBox.value = "";
  addToDo.disabled = true;
});

inputBox.addEventListener("keyup", function () {
  if (inputBox.value.trim().length < 3) {
    //entfernt alle Leerzeichen vor und nach der tatsächlichen Eingabe
    addToDo.disabled = true;
  } else {
    addToDo.disabled = false;
  }
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    addToDo.click();
  }
});

deleteToDo.addEventListener("click", function () {
  for (let i = toDoList.length - 1; i >= 0; i--) {
    if (toDoList[i].done === true) {
      toDoList.splice(i, 1);
    }
  }
  renderToDos();
  updateLocalStorage();
});

allRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    renderToDos();
  });
});

window.addEventListener("load", function () {
  try {
    const toDosFromStorage = JSON.parse(localStorage.getItem("toDoList")) || [];
    toDoList.push(...toDosFromStorage);
    renderToDos();
  } catch (error) {
    console.error("Error loading To-Dos from Local Storage:", error);
  }
});

// ----------------------Functions-----------------------

function updateLocalStorage() {
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

function createNewToDo() {
  const newToDo = new ToDo();
  newToDo.name = inputBox.value;

  toDoList.push(newToDo);
  updateLocalStorage();
}

function filter() {
  let filteredList = [];
  allRadios.forEach((radio) => {
    if (radio.checked && radio.value === "done") {
      filteredList = toDoList.filter((task) => task.done === true);
    } else if (radio.checked && radio.value === "open") {
      filteredList = toDoList.filter((task) => task.done === false);
    } else if (radio.checked && radio.value === "all") {
      filteredList = toDoList;
    }
  });
  return filteredList;
}

function renderToDos() {
  ///Muss hier logisch noch irgendwas raus?

  ulistOfToDos.innerHTML = "";

  let filteredList = filter();

  filteredList.forEach((newToDo) => {
    const newLi = document.createElement("li");
    newLi.className = "toDoBox";
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = newToDo.done;

    checkbox.addEventListener("change", function () {
      newToDo.done = checkbox.checked;

      updateLocalStorage();
    });
    newLi.append(checkbox);
    const text = document.createElement("span");
    text.innerText = newToDo.name;
    newLi.append(text);

    ulistOfToDos.appendChild(newLi);
  });
}

renderToDos();
