//State
const toDoArray = [
  {
    id: Date.now(),
    name: "name",
    done: false,
  },
];

//Selektors
//Buttons
const addToDo = document.querySelector("#addBtn");
const deleteToDo = document.querySelector("#deleteBtn");
const deleteAllToDo = document.querySelector("#deleteAllBtn");

const inputBox = document.querySelector("#toDo-Input");
const ulistOfToDos = document.querySelector("#toDo-List");
const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

class ToDo {
  constructor() {
    this.id = Date.now();
    this.name = "";
    this.done = false;
  }
}

addBtn.addEventListener("click", function () {
  renderToDos();
});

document.addEventListener("keydown", function (event) {
  if (event.code === "Enter") {
    addBtn.click();
  }
});

function renderToDos() {
  const newToDo = new ToDo();
  const newListItem = document.createElement("li");
  newToDo.name = inputBox.value;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = newToDo.done;

  newListItem.append(newToDo.name, checkbox);
  ulistOfToDos.appendChild(newListItem);

  checkbox.addEventListener("change", function () {
    newToDo.done = checkbox.checked;
    if (checkbox.checked === true) {
      newListItem.style.textDecoration = "line-through";
    } else {
      newListItem.style.textDecoration = "none";
    }
  });

  toDoArray.push(newToDo);

  inputBox.value = "";
  addToDo.disabled = true;
}

deleteAllBtn.addEventListener("click", function () {
  const ul = document.querySelector("#toDo-List");
  ul.innerText = "";
});

deleteBtn.addEventListener("click", function () {
  for (let i = 0; i < toDoArray.length; i++) {
    if (toDoArray[i].done === true) {
      const rmChild = ulistOfToDos.childNodes[i + 1];
      ulistOfToDos.removeChild(rmChild);
      toDoArray.splice(i, 1);
    }
  }
});

function state() {
  addBtn.click();
  return toDoArray;
}

//Filter
// const filterButtons = document.querySelectorAll('input[type="radio"]');
const filterAll = document.querySelector("#filterAll");
const filterDone = document.querySelector("#filterDone");
const filterOpen = document.querySelector("#filterOpen");

filterDone.addEventListener("change", function () {
  filter();
});

function filter() {
  if (filterDone.checked === true) {
    for (let i = 0; i < ulistOfToDos.children.length; i++) {
      if (
        children[i].querySelector('input[type="checkbox"]').checked === false
      ) {
        ulistOfToDos.children[i].style.display = "none";
      }
    }
  }
}

//implement Filter
//Style CSS

// for (let i = 0; i < toDoArray.length; i++) {
//   const doneList = [];
//   if (toDoArray[i].done === true) {
//     // doneList.push(toDoArray[i]);
//     // console.log(doneList);
//   }
//   }
// } else if (filterOpen === checked) {
//   for (let i = 0; i < toDoArray.length; i++) {
//     const openList = [];
//     if (toDoArray[i].done === false) {
//       openList.push(toDoArray[i]);
//       console.log(openList);
//     }
//   }
// } else {
//   console.log(toDoArray);
