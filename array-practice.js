const findMinimum = (arr) => {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
  // time: O(n) and Space O(1)
};

const runningSum = (arr) => {
  let summedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      summedArray.push(arr[i]);
    } else summedArray.push(arr[i] + summedArray[i - 1]);
  }
  return summedArray;
  // time: O(n) space: O(n)
};

const evenNumOfChars = (arr) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 === 0) {
      count++;
    }
  }
  return count;
  //time: O(n) space: O(1)
};

const smallerThanCurr = (arr) => {
  let newArr = [];
  // debugger;
  for (let i = 0; i < arr.length; i++) {
    let num1 = arr[i];
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      let num2 = arr[j];
      if (num2 < num1 && j !== i) {
        count++;
      }
    }
    newArr.push(count);
  }
  return newArr;
};

const arr = [8, 1, 2, 2, 3];
smallerThanCurr(arr); // => [4,0,1,1,3]

const twoSum = (arr, target) => {
  // Your code here
};

const secondLargest = (arr) => {
  // Your code here
};

const shuffle = (arr) => {
  // Your code here
};

module.exports = [
  findMinimum,
  runningSum,
  evenNumOfChars,
  smallerThanCurr,
  twoSum,
  secondLargest,
  shuffle,
];
