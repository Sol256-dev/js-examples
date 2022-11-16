let nums = [2,7,11,15];
let target = 9;

function twoSum(x, y) {
  for (let index = 0; index < x.length; index++) {
    for (let index2 = 1; index2 < x.length; index2++) {
      if (x[index] + x[index2] === target) {
        // return [index, index2];
        console.log(index + ' ' + index2);
      }
    }
  }
}

twoSum(nums, target);
