const findMinimum = arr => {
  let min = arr[0];
  for(let i = 1; i < arr.length; i++){ 
    if (arr[i] < min){
      min = arr[i]
    }
    
  }
  return min;
  // time: O(n) and Space O(1)
};


const runningSum = arr => {
  let summedArray = [];
  for(let i = 0; i < arr.length; i++){
    if(i === 0) {
      summedArray.push(arr[i])
    }
    else summedArray.push(arr[i] + summedArray[i-1])
  }
  return summedArray;
  // time: O(n) space: O(n)
};



const evenNumOfChars = arr => {

  // Your code here 
};

const smallerThanCurr = arr => {

  // Your code here 

};

const twoSum = (arr, target) => {

  // Your code here 
};

const secondLargest = arr => {

  // Your code here 
};

const shuffle = (arr) => {

  // Your code here 
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
