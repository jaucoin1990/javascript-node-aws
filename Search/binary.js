//Write a function called binarySearch which accepts a sorted array and a value
//Returns the index at which the value exists. Otherwise, return -1.

const binarySearch = function(sortedArray, value) {
    let min = 0;
    let max = sortedArray.length - 1;

    const searchRecursion = function (min, max) {
        if (min > max) {
            return -1; // Value not found
        }

        let guess = Math.floor((min + max) / 2);

        if (sortedArray[guess] === value) {
            return guess;
        } else if (sortedArray[guess] < value) {
            return searchRecursion(guess + 1, max); // Return the result of the recursive call
        } else if (sortedArray[guess] > value) {
            return searchRecursion(min, guess - 1); // Return the result of the recursive call
        }
    }

    return searchRecursion(min, max);
}

console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 10)) // 2
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 95)) // 16
console.log(binarySearch([
  5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 
  40, 44, 64, 79, 84, 86, 95, 96, 98, 99
], 100)) // -1
