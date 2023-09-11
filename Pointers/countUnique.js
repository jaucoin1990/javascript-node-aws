//create func that accepts sorted array
//count unique values in array
//there can be negative

const arr = [-3, -3, 1, 2, 2, 2, 2, 4, 5, 7, 9, 9, 10]; //7

const countUnique = function(arr) {

    if (arr.length === 0) {
        return 0;
    } else if (arr[0] === arr[arr.length -1]) {
        return 1;
    }

    let uniqueVal = [arr[0]];

    for (let i of arr) {
        if (i !== uniqueVal[uniqueVal.length-1]) {
            uniqueVal.push(i);
        }
    }
    return uniqueVal.length;
}
console.log(countUnique(arr));