// Javascript Program to Solve Quadratic Equation

alert(
  "Equation must be like this: ax^2 + bx + c and (a,b,c) are real numbers and 'a' cannot be Zero."
);

var a = parseInt(prompt("Enter a number for a: "));
var b = parseInt(prompt("Enter a number for b: "));
var c = parseInt(prompt("Enter a number for c: "));

var discriminant = b * b - 4 * a * c;
var root1, root2;
var real, unreal;

if (discriminant > 0) {
  root1 = ((-b + Math.sqrt(discriminant)) / 2) * a;
  root2 = ((-b - Math.sqrt(discriminant)) / 2) * a;

  alert("The roots of quadratic equation are " + root1 + " and " + root2 + ".");
} else if (discriminant == 0) {
  root1 = root2 = (-b / 2) * a;
  alert("The roots of quadratic equation are " + root1 + " and " + root2 + ".");
} else if (discriminant < 0) {
  real = (-b / (2 * a)).toFixed(2);
  unreal = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

  alert(
    "The roots of quadratic equation are " +
      real +
      " + " +
      unreal +
      " and " +
      real +
      " - " +
      unreal +
      "."
  );
} else {
  alert("Invalid Inputs!");
}
