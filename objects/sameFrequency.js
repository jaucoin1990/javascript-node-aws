//Write a function called sameFrequency. Given two positive integers
//find out if the two numbers have the same frequency of digits.

//Your solution MUST have the following complexities: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

let num1 = 1234;
let num2 = 321;

const sameFrequency = function (num1, num2) {

    if (!num1 && !num2) {
        return true;
    }

    //convert num to array (not considering this in big O)
    const num1Array = String(num1).split('').map((i) => Number(i))
    const num2Array = String(num2).split('').map((i) => Number(i))

    //checks
    if (num1Array.length !== num2Array.length) {
        return false;
    }

    //store frequency of num occurences in obj
    const counter = {};
    
    for (let i of num1Array) {
        if (!counter[i]) {
            counter[i] = 1;
        } else {
            counter[i]++;
        }
    }

    //check num2 against num1 obj
    for (let j of num2Array) {
        if (counter[j]) {
            counter[j]--;
        } else {return false}
    }

    return true;

}

console.log(sameFrequency(num1, num2))