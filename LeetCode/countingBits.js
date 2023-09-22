//Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), 
//ans[i] is the number of 1's in the binary representation of i.

// Example 1:
// Input: n = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10

// Example 2:
// Input: n = 5
// Output: [0,1,1,2,1,2]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10
// 3 --> 11
// 4 --> 100
// 5 --> 101

const num = 5;

const countingBits = function (num) {
    let arr = [];
    let index = 0;
    let countToIndex = 0;

    if (num === 0) {
        return arr;
    }

    while (index !== num) {
        let oneCount = 0;

        if(countToIndex === index) {
            countToIndex = 0;
            index += 1;
            arr.push(oneCount);
            oneCount = 0;
            continue;
        }

        if (countToIndex & 1) {
            oneCount += 1;
        }

        countToIndex = countToIndex >>> 1;



    }
    return arr;

}

console.log(countingBits(num));