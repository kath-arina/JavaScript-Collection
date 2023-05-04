// //Opposite Number

// function opposite(number) {
//   let result;
//   if (number < 0) {
//     result = number + number * -2;
//   } else if (number > 0) {
//     result = number - number * 2;
//   } else {
//     result = 0;
//   }

//   return result;
// }

// console.log(opposite(-20));

//Sum of positive

// function positiveSum(arr) {
//   let count = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       count += arr[i];
//     }
//   }
//   return count;
// }

// console.log(positiveSum([1, -4, 7, 12]));

// const arr = [1, -4, 7, 12];

// console.log(arr[3]);

// //Testing String APIs

// const test = "Hallo Hallo, Test 123";
// const test2 = "Testdurchlauf";

// const isIncludedinTest = test.includes("Test");

// console.log(isIncludedinTest);

// const replaceTest = test.replace("Hallo", "Hey");

// console.log(replaceTest);

// const replaceAlltest = test.replaceAll("Hallo", "Hey");
// console.log(replaceAlltest);

// const splitTest = test2.split(" ");
// console.log(splitTest);

// const indexTest = test.indexOf("o");
// console.log(indexTest);

// const indexTest2 = test.indexOf("o", indexTest + 1);
// console.log(indexTest2);

// const repeatTest = test.repeat(3);
// console.log(repeatTest);

// const upperTest = test.toUpperCase();
// console.log(upperTest);

//Testing Array APIs

//const arr1 = ["Hallo", "Test", "bunte Wiese", 43, "blauer Himmel", 6];

// const arrReverse = arr1.reverse();
// console.log(arrReverse);

// // const arrJoin = arr1.join("/");
// // const arrJoin1 = console.log(arrJoin).split();
// // consolelog(arrJoin1);

// const arrIncludes = arr1.includes(43);
// console.log(arrIncludes);

// function sayHello(arr1) {
//   console.log("Hello " + arr1);
// }
// arr1.forEach(sayHello);

// function filter(arr1) {
//   let filString = (arr1) =>
//     arr1.filter((element = typeof element === "string"));
//   return filString;
// }
// console.log(arr1);

// const arrFilter = arr1.filter(filter);
// console.log(arrFilter);

// function sort(arr1) {}  ////Hat alles nicht funktioniert sort und filter von arrays

// const arrSort = arr1.sort();
// console.log(arrSort);

// Task Return Negative

// function makeNegative(num) {
//   let numNew = 0;
//   if (num > 0) {
//     numNew = num * -1;
//   } else if (num < 0) {
//     numNew = num;
//   }

//   return numNew;
// }

// console.log(makeNegative(-5));

//Task Number of People in the bus

// busStops = [
//   [3, 0],
//   [9, 1],
//   [4, 10],
//   [12, 2],
//   [6, 1],
//   [7, 10],
// ];

// var number = function (busStops) {
//   let count = 0;
//   busStops.forEach((stop, i) => {
//     let stop = busStops[i];
//     count += stop[0] - stop[1];
//   });

//   return count;
// };

// console.log(number(busStops));

// Task Reversed Strings

// function solution(str) {
//   const arr = str.split(" ");
//   console.log(arr);
//   arr.reverse(); // einfacher: arr.reverse().join("") --> dann brauche ich auch keine zweite str Variable
//   str2 = arr.join("");
//   return str2;
// }
// console.log(solution("Day TWO"));

// // Task Even numbers in Arrays

// //Version 1

// function evenNumbers(array, number) {
//   const arr2 = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       arr2.push(array[i]);
//     }
//   }

//   const arr3 = arr2.slice(-number);

//   return arr3;
// }
// // Version Nina
// function evenNumbers(array, number) {
//   const even = [];
//   for (let num of array) {
//     if (num % 2 === 0) even.unshift(num);
//   }

//   return even.slice(0, number).reverse();
// }

// // Version 2
// function evenNumbers(array, number) {
//   const arr2 = array.filter((i) => i % 2 === 0);

//   const arr3 = arr2.slice(-number);

//   return arr3;
// }
// console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2));

// // Task Get the middle Character

// //Version 1

// function getMiddle(s) {
//   if (s.length % 2 === 0) {
//     half = s.length / 2;
//     middle = s.slice(half - 1, half + 1);
//   } else {
//     half = s.length / 2;
//     middle = s.slice(half - 0.5, half + 0.5);
//   }
//   return middle;
// }
// console.log(getMiddle("test"));

// //Version 2

// function getMiddle(s) {
//   if (s.length % 2 === 0) {
//     half = s.length / 2;
//     middle = s.slice(half - 1, half + 1);
//   } else {
//     half = Math.floor(s.length / 2);
//     middle = s.slice(half, half + 1);
//   }
//   return middle;
// }

// //Version 3 --> in JS wird automatisch abgerundet, wenn der End-Index des slice nicht gerade ist.

// function getMiddle(s) {
//   return s.slice((s.length - 1) / 2, s.length / 2 + 1);
// }

// console.log(getMiddle("test"));

// Task Isograms

// const str = "Helo";

// function isIsogram(str) {
//   str = str.toLowerCase().split("");

//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j < str.length; j++) {
//       if (str[i] === str[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }
// console.log(isIsogram(str));

//Task Vowel Count

// Version 1 funktioniert nicht!

// function getCount(str) {
//   str = str.split("");
//   const vow = ["a", "e", "i", "o", "u"];
//   let count = 0;

//   for (let j = 0; j < vow.length; j++) {
//     if (str.includes(vow[j]) === true) {
//       count++;
//     }
//   }

//   return count;
// }
// console.log(getCount("chaiiiiio"));

//Version 2

// function getCount(str) {
//   const regEx = /[aeiou]/gi;
//   let count = 0;

//   if (str.match(regEx) !== null) {
//     count = str.match(regEx).length;
//   } else {
//     count = 0;
//   }

//   return count;
// }
// console.log(getCount("chai"));

//Task String Repeat

// function repeatStr(n, s) {
//   return s.repeat(n);
// }

// console.log(repeatStr(4, "Maulwurf"));

// Task Descending Order

// function descendingOrder(n) {
//   console.log(n);
//   let arr = n.toString();
//   console.log(arr);
//   arr1 = arr.split("");
//   console.log(arr1);
//   arr2 = arr1.sort((n1, n2) => n2 - n1);
//   console.log(arr2);
//   return Number(arr2.join(""));
// }

// console.log(descendingOrder(01234));

//Task Mumbling

// //Version 1

// function accum(s) {
//   const arr = s.split("");
//   let result = "";

//   for (let i = 0; i < arr.length; i++) {
//     let a1 = s.charAt(i).repeat(i + 1);
//     let a2 = a1.charAt(0).toUpperCase() + a1.slice(1).toLowerCase();
//     result += a2 + "-";
//   }

//   return result.slice(0, -1);
// }
// console.log(accum("hallo"));

//Task Credit Card

// function maskify(cc) {
//   const mask = cc.slice(0, -4).replaceAll(/./g, "#");
//   console.log(cc.slice(0, -4).length);
//   const rest = cc.slice(-4);

//   const finalMask = mask + rest; // auch: mask.concat("",rest)

//   return finalMask;
// }
// console.log(maskify("935616"));

// console.log(maskify("1"));
// console.log(maskify("Skippy"));
// console.log(maskify(""));

//Task Highest and lowest

// function highAndLow(numbers) {
//   const arrNum = numbers.split(" ");
//   arrNum.sort((a, b) => a - b);

//   const arrLow = arrNum.slice(0, 1);
//   const arrHigh = arrNum.slice(-1);

//   const finalArr = arrHigh.concat(arrLow).join(" ");

//   return finalArr;
// }

// console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));

// Task Remove First & Last Character

//Version1
// function removeChar(str) {
//   const strNew = str.slice(1, -1);

//   return strNew;
// }
//Version 2

// function removeChar(str) {
//   const strNew = str.substring(1, str.length - 1);

//   return strNew;
// }

// console.log(removeChar("eloquent"));
