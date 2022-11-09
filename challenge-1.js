let strOne, strTwo;

strOne = prompt("enter value for string one: ");
strTwo = prompt("enter value for string two: ");

function fizzBuzz(a, b) {
  combLength = a.length + b.length;

  if (combLength % 3 === 0 && combLength % 5 === 0) {
    return "FizzBuzz";
  } else if (combLength % 3 === 0) {
    return "Fizz";
  } else if (combLength % 5 === 0) {
    return "Buzz";
  } else {
    return "n/a";
  }
}

console.log(fizzBuzz(strOne, strTwo));