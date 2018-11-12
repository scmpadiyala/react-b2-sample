/*
function <<function_name>> (params) : return_type {
    body
}
*/

/*
    Arrow function also called Lambda functions ==> ES6 : final feature // experimental feature 
*/

let marks = () => {
  console.log("Wlecome to Lamda function");
};

//marks();


// defining the age function which takes date of birth 
// as a parameter and calc age and return the age
// this is similar to "function age(dob) : number"

let age = (dob) => {
  console.log("DOB : " + dob);
  // clac age & return the value
  let stdAge = 15; // apply logic for calc age
  return stdAge;
};

//console.log("std age : " + stdAge);

var stdAge = age("10-Oct-2001");

console.log("Student Age arrow function : " + stdAge);
