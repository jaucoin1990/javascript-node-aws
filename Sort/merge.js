const merge = function (arrOne, arrTwo) {
    let newArray = [];
    let arrOneCounter = 0;
    let arrTwoCounter = 0;

    while(newArray.length < arrOne.length + arrTwo.length) {

        if (arrOne[arrOneCounter] === undefined) {
            newArray.push(arrTwo[arrTwoCounter]);
            arrTwoCounter++;
        } else if (arrTwo[arrTwoCounter] === undefined) {
            newArray.push(arrOne[arrOneCounter]);
            arrOneCounter++;
        } else if (arrOne[arrOneCounter] < arrTwo[arrTwoCounter]) {
            newArray.push(arrOne[arrOneCounter]);
            arrOneCounter++;
        } else if (arrOne[arrOneCounter] > arrTwo[arrTwoCounter]) {
            newArray.push(arrTwo[arrTwoCounter]);
            arrTwoCounter++;
        } else {
            newArray.push(arrOne[arrOneCounter]);
            arrOneCounter++;
            newArray.push(arrTwo[arrTwoCounter]);
            arrTwoCounter++;

        };
    }
    return newArray;
};
console.log(merge([1, 3, 6, 9], [2, 6, 15, 16]))