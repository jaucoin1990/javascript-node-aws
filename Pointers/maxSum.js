//given an array and a window size, return the highest summed number 
//of length window size


const arr = [1, 3, 5, 2, 3, 7, 8, 3, 1, 3, 6];
const window = 4;


const maxSubarraySum = function (arr, window) {
    let maxSum = 0;
    let tempSum = 0;

    for (let i = 0; i < window; i++) {
        maxSum += arr[i];
    };
    
    tempSum = maxSum;

    for (let j = window; j < arr.length; j++) {
        tempSum = tempSum - arr[j - window] + arr[j];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;

};

console.log(maxSubarraySum(arr, window))