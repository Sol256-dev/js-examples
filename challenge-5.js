let arrs = ["a", 5, 12, "t", "c", 6.7, "b", 8, 3.5];
let even = [];
let char = [];
let odd = [];

function check(x) {
  x.forEach((element) => {
    if (element % 2 === 0) {
        even.push(element)
    }
    if (element % 2 !== 0 && typeof element !== 'string') {
      odd.push(element)
    }
    if (typeof element === "string") {
      char.push(element)
    }
  });

  return {evens : even, odds : odd, chars : char}
}

console.log(check(arrs));