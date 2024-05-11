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
  // time: O(n^2) and space: O(n)
};

const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    let num1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let num2 = arr[j];
      if (num1 + num2 === target) {
        return true;
      }
    }
  }
  return false;
  // time: O(n^2) space: O(1)
};

const secondLargest = (arr) => {
  let max = arr[0];
  debugger;
  let secondMax = -Infinity;
  if (arr.length < 2) return undefined;
  if (arr.length === 2) {
    if (arr[0] < arr[1]) {
      return arr[0];
    }
    return arr[1];
  }

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] < max && arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }
  return secondMax;
};
//time: O(n) space: O(1)
const getRandomInt = (max) => {
  return Math.floor(Math.random()) * max;
};
const shuffle = (arr) => {
  let copy = arr.slice();

  for (let i = copy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = copy[i];
    copy[i] = copy[j];
    copy[j] = temp;
  }
  return copy;
  // let random = []

  // let num = arr[getRandomInt(arr.length)]
  // random.push(num)
  // arr.splice(num, 1)
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
