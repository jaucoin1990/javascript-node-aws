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

    for(let i = 0; i <= num; i++) {
        if(i === 0) {
            arr.push(0)
            continue;
        } else if (i === 1) {
            arr.push(1)
            continue;
        }

        let bitAmount = i;
        let count = 0;
        while (bitAmount !== 0) {

            if (bitAmount & 1) {
                count += 1;
            }

            bitAmount = bitAmount >>> 1;

        }
        arr.push(count);
    }
    return arr;
}

console.log(countingBits(num))