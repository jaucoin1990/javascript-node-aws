//You are given all numbers between 1,2,…,n except one. Find the missing number.
//The first input line contains an integer n
//The second line contains n−1. Each number is distinct and between 1 and n
//Output: Print the missing number.
//Input: 5; 2 3 1 5
//Output: 4

const num = 5;
const arr = [2, 3, 1, 5];

const missing = function (num, arr) {
    let missingNum;
    let fullArray = new Array(num);

    for (let i = 1; i <= fullArray.length; i++) {
        fullArray[i - 1] = i;
    };

    for (let j = 0; j < arr.length; j++) {

        let k = arr[j] - 1;
        if(arr[j] === fullArray[k]) {    //0 = 2; 2=3
            fullArray[k] = 0;
        }
    };

    for (let l = 0; l < fullArray.length; l++) {
        if (fullArray[l] !== 0) {
            missingNum = fullArray[l]
        };
    };

    return missingNum;
};

console.log(missing(num, arr));