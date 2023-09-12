//Write a function called averagePair. Given a sorted array of integers
//and a target average, determine if there is a pair of values in the array 
//where the average of the pair equals the target average. There may be 
//more than one pair that matches the average target.

// Bonus Constraints: O(N); O(1)

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

const arr = [];
let average = 4.5;

const averagePair = function (arr, average) {
    if (arr.length === 0 || typeof average !== 'number') {
        return false;
    }
    let obj = {};

    for (let i of arr) {
        let lookingFor = average * 2 - i;
        if (!obj[i]) {
            obj[lookingFor] = 1;
        } else if (obj[i]) {
            return true;
        }
    }
    return false;
}

console.log(averagePair(arr, average))

