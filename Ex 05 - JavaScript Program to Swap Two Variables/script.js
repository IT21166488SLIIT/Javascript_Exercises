var number1 = parseInt(prompt("Enter a number: "));
var number2 = parseInt(prompt("Enter a number: "));

console.log(
  "Before swapping numbers: First number -> " +
    number1 +
    " Second number -> " +
    number2 +
    "."
);

var temp = number1;
number1 = number2;
number2 = temp;

console.log(
  "After swapping numbers: First number -> " +
    number1 +
    " Second number -> " +
    number2 +
    "."
);
