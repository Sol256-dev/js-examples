let words = ["abc", "car", "ada", "racecar", "cool"];
let rev = '';
let y = 0;

function firstPalindrome(x) {
  x.forEach((element) => {
    rev = element.split("").reverse().join("");

    switch (element) {
      case rev:
        while (y < 1) {
          console.log(rev);
          y++;
        }
        break;

      default:
        console.log("");
        break;
    }
  });
}

console.log(firstPalindrome(words));