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
  for(let i = 0; i < arr.length; i++){
    let num1 = arr[i]
    for(let j = i + 1; j< arr.length; j++){
      let num2 = arr[j];
      if(num1 + num2 === target){
        return true;
      }
    }
  }
  return false;
};

const secondLargest = (arr) => {
  // let max = arr[0];
  // let secondMax = -Infinity;
  // if(arr.length < 2) return undefined
  // if (arr.length === 2){
  //   if(arr[0] < arr[1]){
  //     return arr[0]
  //   } return arr[1]
  // }

  // for (let i = 1; i < arr.length; i++){
  //   if (arr[i] > max){
  //     //secondMax = max
  //     max = arr[i]
  //   } else if(arr[i] < max && arr[i] > secondMax) {
  //     secondMax = arr[i]
  //   }
  // }
  // return secondMax
};

// const arr = [4, 2, 3, 6, 8];
// console.log(secondLargest(arr)); // => 6

const arr2 = [4, 3, 2, 1];
console.log(secondLargest(arr2)) // 3



// let max = arr[0]
// if(arr.length < 2) return undefined

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max){
//     max = arr[i]
//   }
//   //arr.splice(max, 1)
// }
// console.log("max: ", max)
// let secondMax = arr[0]
// for (let i = 0; i < arr.length; i++) {
//   if (secondMax < arr[i] && arr[i] !== max){
//     secondMax = arr[i]
//   }
  
// }
// console.log("secondMax: ", secondMax)
// return secondMax;



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
