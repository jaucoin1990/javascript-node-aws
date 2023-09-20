// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

const arr = [2,3,-2,4];

const maxProductSubArr = function (arr) {
    if (arr.length === 0) return null;

    let currentProduct = arr[0];
    let maxProduct = arr[0];

    for (let i = 1; i < arr.length; i++) {
        currentProduct = Math.max(arr[i], currentProduct * arr[i]);
        maxProduct = Math.max(maxProduct, currentProduct);
    }
    return maxProduct;
}

console.log(maxProductSubArr(arr));