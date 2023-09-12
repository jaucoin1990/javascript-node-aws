//Write a recursive function called someRecursive which accepts an array and a callback.
//The function returns true if a single value in the array returns true when passed to the callback. 
//Otherwise it returns false.


const isOdd = val => val % 2 !== 0;
const arr = [2, 5, 6, 8, 10, 12]

const someRecursive = function (arr, func, index=0) {
    if(func(arr[index])) {
        return true;
    }

    if (index === arr.length-1) {
        return false;
    }

    return someRecursive(arr, func, index + 1)
}

console.log(someRecursive(arr, isOdd))