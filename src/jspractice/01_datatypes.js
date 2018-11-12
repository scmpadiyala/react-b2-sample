console.log("Welcome to my first program");

// 1. Variable declation and datatypes

// var / let can be used for variable declaration

var studentId = 100; // number

console.log("Student ID : " + studentId);

studentId = "Sample Test"; // String

console.log("Student ID : " + studentId);

studentId = true; // boolean

console.log("Student ID : " + studentId);

// Arrays

let studentIds = [100, 101, 102, 103, 104];

console.log("Student IDs : " + studentIds);

console.log("Student IDs : " + studentIds.length);

// Opearators : +, -, *, /, % (mode) - return the remainde, ==, >=, <=, ++, --

// Access array element using index - ZERO and Lenght -1

// Loops For, While, do-while
// decision - IF - ELSE - IF, SWITCH - CASE, Ternary Operator ? :

for (let i = 0; i < studentIds.length; i++) {
  console.log("Array Element @ index : " + i + " element : " + studentIds[i]);
}

// aleternate way of For loop - ES6

for (let student of studentIds) {
  console.log("array item : " + student);
}

i = 0;

while (i < studentIds.length) {
  console.log("Array Item from While : " + studentIds[i++]);
}

i = 0;
do {
  i == 3 ? (studentIds[i] = 300) : (studentIds[i] = studentIds[i] + 90);
  console.log("Array Item from do- While : " + studentIds[i++]);
} while (i < studentIds.length);
