//turn 0 into arr.length-1
//turn 2 into arr.length-3

const num = 12345;
const oppositeIndex = 3;

const radixHelper = function (num, oppositeIndex) {
    let index = oppositeIndex + 1;
    let indexValue = num.toString()[num.toString().length-index.toString()]
    return parseInt(indexValue);
}

console.log(radixHelper(num, oppositeIndex));