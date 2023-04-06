// Task 1

const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20

//Task 2
//function hatRest(num){
// if (retVal == 0){
//     return false
// } else{
//     return true
// }
//}

// Strg+K,Strg+C
// Strg+K,Strg+U
// F2 -> refactoring von Benamungen (Cursor Wort markieren)

function hasRemainder(value) {
  return value % 2 != 0;
}

function oddEven(num) {
  if (hasRemainder(num) == true) {
    return "odd";
  } else {
    return "even";
  }
}

console.log(oddEven(4));
console.log(oddEven(5));

function PrintNum(num) {
  return "Number " + num + " is " + oddEven(num) + ".";
}

console.log(PrintNum(6));
console.log(PrintNum(7));

//Task 3

function oldYoung(age) {
  sVar = "invalid parameter";

  if (age >= 0) {
    switch (true) {
      case age < 16:
        sVar = "children";
        break;
      case age < 50:
        sVar = "young person";
        break;
      case age >= 50:
        sVar = "elder person";
        break;
    }
  }

  return sVar;
}

// TODO: Implement the oldYoung function
console.clear();
console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person

console.log(oldYoung(86.7));

console.log(oldYoung("sechsundatchzig"));
