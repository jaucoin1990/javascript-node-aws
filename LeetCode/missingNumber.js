// Given an array nums containing n distinct numbers in the range [0, n], 
// return the only number in the range that is missing from the array.

// Example 1:
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number

// Example 2:
// Input: nums = [0,1]
// Output: 2
// Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number

// Example 3:
// Input: nums = [9,6,4,2,3,5,7,0,1]
// Output: 8
// Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number

// const arr = [0,1];

// const missingNumber = function (arr) {
//     //sort the array of nums so that arr[index] === index
//     arr.sort((a, b) => a - b); //0,1,2,3,4,5,6,7,9

//     //binary search: if arr[index] > index, move back, else move forward
//     let left = 0;
//     let right = arr.length-1; 
//     let middle;
    

//     while (left <= right) {
//         middle = Math.floor((left + right)/2);
//         if (arr[middle - 1] === middle-1 && arr[middle] !== middle ) { //3 = 3, 5 = 5
//             return middle;
//         } else if (arr[middle] > middle) { //right half
//             right = middle - 1;
//         } else {
//             left = middle + 1;
//         }
//     }
//     return middle;

// }

// console.log(missingNumber(arr))

const arr = [9,6,4,2,3,5,7,0,1]; //0,1,2,3,4,5,6,7,9

const missingNumber = function (arr) {
    arr.sort((a,b) => a - b) 

    for (let i = 0; i < arr.length; i++) {
        if (i === 0 && i !== arr[i]) {
            return 0;
        }
        if (i !== arr[i]) {
            return i;
        }
    }
    return arr.length;

}

console.log(missingNumber(arr));

