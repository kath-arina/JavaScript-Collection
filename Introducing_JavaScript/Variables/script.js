//Just Trying

let username6; // const not working SyntaxError

console.log(username6);

function username1(name) {
  return name;
}

console.log((username1 = "Hagrid"));

let username3 = "John";
console.log((username3 += "Doe"));

//Task 1

let userName = "Brad";
userName = "Jenna";

function getUserNameLength(userName) {
  return userName.length > 4;
}

console.log(getUserNameLength(userName, 4));
// ^______________ Should log true

//Task 2

const isString = function (parA) {
  return typeof parA === "string";
};

console.log(isString("Haus"));

// TODO: Implement the isString function

console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true
