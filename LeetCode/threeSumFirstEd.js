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

const arr = [-1,0,1,2,-1,-4];

const threeSum = function (arr) {
    arr = arr.sort((a, b) => a - b); //[ -4, -1, -1, 0, 1, 2 ]

    if (arr.length < 3) {
        return false;
    }

    if (arr.length === 3 && arr[0] + arr[1] + arr[2] === 0) {
        return arr;
    }

    let threeSumArray = [];

    for (let i = 0; i < arr.length-2; i++) {
        let j = i+1;
        let k = arr.length-1;

        while (j < k) {
            if (arr[i] + arr[j] + arr[k] === 0) {
                threeSumArray.push([arr[i], arr[j], arr[k]]);
                console.log(arr[j], arr[j+1])
                if(arr[j] === arr[j+1]) {
                    console.log(arr[j], arr[j+1])
                    j++;
                }
                if(arr[k] === arr[k-1]) {
                    k--;
                }
                j++;
                k--;
            } else if (arr[i] + arr[j] + arr[k] < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    return threeSumArray;
}

console.log(threeSum(arr))