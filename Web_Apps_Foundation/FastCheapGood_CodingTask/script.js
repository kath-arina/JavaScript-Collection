// // const fast = document.querySelector("#box1_fast");
// // const cheap = document.querySelector("#box2_cheap");
// // const good = document.querySelector("#box3_good");
// const allBoxes = document.querySelectorAll('input[type="checkbox"]');
// let clickCount = 0;
// let previousCheckbox = null;

// // console.log(cheap.checked);
// // console.log(fast.checked);
// // console.log(good.checked);
// console.log(allBoxes.checked);
// console.log(clickCount);

// function handleCheckboxClick(event) {
//   const currentCheckbox = event.target;

//   if (currentCheckbox.checked) {
//     clickCount++;

//     if (clickCount > 2) {
//       previousCheckbox.checked = false;
//       clickCount = 2;
//     }
//   } else {
//     clickCount--;
//   }

//   if (clickCount === 2) {
//     allBoxes.forEach((checkbox) => {
//       if (!checkbox.checked) {
//         checkbox.disabled = true;
//       }
//     });
//   } else {
//     allBoxes.forEach((checkbox) => {
//       checkbox.disabled = false;
//     });
//   }

//   previousCheckbox = currentCheckbox;
// }

// allBoxes.forEach((allBoxes) => {
//   allBoxes.addEventListener("click", handleCheckboxClick);
// });

// allBoxes.forEach(function (box) {
//   box.addEventListener("click", function () {
//     clickCount++;
//     let previousClick = clickCount - 1;
//   });

//   if (clickCount >= 3) {
//     allBoxes.forEach((allBoxes) => {
//       allBoxes.addEventListener("click", function () {
//         if (previousCheckbox && previousCheckbox !== this) {
//           previousCheckbox.checked = false;
//         }
//         previousCheckbox = this;
//       });
//     });
//   } else {
//     console.log("Bitte wählen Sie mindestens eine Option aus.");
//   }
// });

// const fast = document.querySelector("#box1_fast");
// const cheap = document.querySelector("#box2_cheap");
// const good = document.querySelector("#box3_good");
const allBoxes = document.querySelectorAll('input[type="checkbox"]');
let clickCount = 0;
let checkedBoxes = [];

allBoxes.forEach(function (box) {
  box.addEventListener("change", function () {
    console.log(this);
    if (this.checked) {
      //clickCount++;
      checkedBoxes.push(this);
      if (checkedBoxes.length === 3) {
        console.log("alle angeklickt");
        checkedBoxes[1].checked = false;
        checkedBoxes[1] = checkedBoxes[2];
        checkedBoxes.length = 2;
        // let previousCheckbox = checkedBoxes.shift(); //splice(1,1,this);
        // console.log(previousCheckbox);
        // previousCheckbox.checked = false;
        // clickCount = clickCount - 1; //clickCount--
      }
    } else {
      //   clickCount = clickCount - 1;
      //   checkedBoxes.splice(checkedBoxes.indexOf(this), 1);
    }
  });
});
