//Task 1

function welcomeMsg(name) {
  return `Welcome ${name}!`;
}

console.log(welcomeMsg("Dobby"));

//Task2

function calcGrossPrice(price, taxrate) {
  return price + price * taxrate;
}

console.log(calcGrossPrice(20, 0.19));

console.log(calcGrossPrice(40, 0.16));

//Task 3

function addPositive(num1, num2) {
  return Math.abs(num1) + Math.abs(num2);
}

console.log(addPositive(2, 3));

console.log(addPositive(3, -5));

console.log(addPositive(-1, -8));
