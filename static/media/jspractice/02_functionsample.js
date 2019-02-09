console.log("Function Sample Program");

// Unit of code and test is a best practice

// function declations

// function <function_name> ([param1, param2, ...]) : <return type>

// function defintion - no parameter & no return value
function displayWelcomeMessage() {
  console.log("Welcome to my function world");
}

// call function
displayWelcomeMessage();

// function with parameters & return value

export function addition(x, y) {
  return x + y;
}

let result = addition(10, 15);
console.log("Addition  of 10 + 15 = " + result);

result = addition(220, 155);
console.log("Addition  of 220 + 155 = " + result);

// function parameter with default value
function addition1(x, y = 10) {
  return x + y;
}

result = addition1(220);
console.log("Addition  of 220 + ? = " + result);

result = addition1(220, 430);
console.log("Addition  of 220 + 430 = " + result);

