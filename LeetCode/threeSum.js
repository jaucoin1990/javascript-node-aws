// Given an integer array nums, return all the triplets 
// [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, 
// and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// First, sort the input array in non-decreasing order.
// Iterate through the array with a pointer "i" from 0 to n-2, where n is the size of the array.
// For each "i", initialize two pointers "lo" and "hi", where "lo" starts at i+1 and "hi" starts at n-1.
// Calculate the sum of elements at i, lo, and hi. If the sum is equal to zero, add the triplet to the result vector.
// If the sum is less than zero, increment "lo" to move towards higher values. If the sum is greater than zero, decrement "hi" to move towards lower values.
// To avoid duplicates, if a value has already been considered, skip it in the future iterations.
// Continue the above process until all possible triplets are considered.

const randomArray = [
    -8, 7, 1, 2, -3, 17, 20, -37, 50, -50, 0
];

const arr = [-1,0,1,2,-1,-4];

const threeSum = function (arr) {
    arr = arr.sort((a, b) => a - b); //[ -4, -1, -1, 0, 1, 2 ]

    if (arr.length < 3) {
        return [];
    }

    if (arr.length === 3 && arr[0] + arr[1] + arr[2] === 0) {
        return arr;
    }

    let threeSumArray = [];

    let i = 0;
    let j = i + 1;
    let k = arr.length - 1;

    while (i < arr.length - 2) {
        // console.log(`In the while ${i} ${j} ${k}`)
        if (j >= k) {
            // console.log("J > K")
            i++;
            j = i + 1;
            k = arr.length - 1;
        }

        if (arr[i] + arr[j] + arr[k] === 0) {
            // console.log("IN the FIRST IF")
            if (!(threeSumArray.length > 0 && threeSumArray[threeSumArray.length-1][0] === arr[i] && threeSumArray[threeSumArray.length-1][2] === arr[k])) {
                threeSumArray.push([arr[i], arr[j], arr[k]]);
                j++;
                k--;
            } else {
                j++;
                k--;
            }
        } else if (arr[i] + arr[j] + arr[k] < 0) {
            // console.log("IN the ELSE IF")
            j++;
            // console.log(`${j}`)
        } else {
            // console.log("IN the ELSE")
            k--;
        }
    }
    return threeSumArray;
}

console.log(threeSum(randomArray))