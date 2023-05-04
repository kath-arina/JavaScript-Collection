//Task 2

// function removeItem(array, numIndex) {
//   let index = numIndex - 1;

//   const newArray = array.slice(0, index).concat(array.slice(index + 1));

//   return newArray;
// }

//Versuch 2 mit Copy von Loops:

// function copyArray(array, index) {
//   newArray = [];

//   for (let index = 0; index < array.length; index++) {
//     newArray.push(array[index]);
//   }
//   return newArray;
// }

// //TODO: Implement the removeItem function

// const animals = ["Dog", "Cat", "Lion"];
// console.log(copyArray(animals, 1));

// console.log(removeItem(animals, 1));
// //result should be: ["Cat", "Lion"]

// console.log(animals);
// // result should be still: ["Dog", "Cat", "Lion"]

// const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];

// console.log(removeItem(fruits, 3));
// // result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

// console.log(fruits);
// // result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

// // Task 2

function sumOfCharacters(array) {
  let count = 0;

  for (let index = 0; index < array.length; index++) {
    if (typeof array[index] === "string") {
      count += array[index].length;
    }
  }

  return count;
}

// // TODO: Implement the sumOfCharacters function

// const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
// console.log(sumOfCharacters(arr1));
// // result should be: 17

// const arr2 = [
//   "Code is",
//   "like humor",
//   ".",
//   "When you have",
//   "to explain it, it's bad!",
// ];
// console.log(sumOfCharacters(arr2));
// // result should be: 55

// const arr3 = [true, "Dobby", 2345, "1234", "HELP"];

// Lösung von Kai

function removeItem(array, position) {
  newArray = [...array]; //this makes a copy and not a reference Alternative: structuredClone(array)
  newArray.splice(position - 1, 1);
  return newArray;
}

const animals = ["Dog", "Cat", "Lion"];

console.log(removeItem(animals, 1));
// // result should be: ["Cat", "Lion"]

// console.log(animals);
// // result should be still: ["Dog", "Cat", "Lion"]

// const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
// console.log(removeItem(fruits, 3));
// // result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

// console.log(fruits);
// // result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]
