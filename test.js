// 4. Write a function named firstPalindrome which takes a parameter: words. Given
// an array of strings words, return the first palindromic string in the array. If there
// is no such string, return an empty string "".
// A string is palindromic if it reads the same forward and backward.

// declare a function
// loop through the array to access all items in the array
// reverse each item in the array
// check it is palindromic

let arr = ["abc", "car", "ada", "cool"];

function firstPalindrome(words) {
  for (let index = 0; index < words.length; index++) {
    const element = words[index];

    const newArr = element.split("").reverse().join("");

    if (element === newArr) {
      console.log(newArr);
    //   break
      return newArr;
    } else {
      console.log(" ");
      return " ";
    }
  }
}

console.log(firstPalindrome(arr));
