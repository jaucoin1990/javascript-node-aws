// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

 

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true

const arr = [1,2,3,4, 7, 35, 11];

const containsDuplicate = function (arr) {
    let numObj = {};

    for(let i of arr) {
        if(!numObj[i]) {
            numObj[i] = 1;
        }
        else {
            return true;
        }
    };
    return false;
};

console.log(containsDuplicate(arr))