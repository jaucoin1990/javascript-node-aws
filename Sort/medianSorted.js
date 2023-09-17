const arr1 = [1, 3, 9];
const arr2 = [2, 5, 7, 8];

const medianOfMergedArrays = function (arr1, arr2) {
    let mergedArray = [];
    let arr1Pointer = 0;
    let arr2Pointer = 0;

    while (mergedArray.length < arr1.length + arr2.length) {

        if (arr1[arr1Pointer] === undefined) {
            mergedArray.push(arr2[arr2Pointer]);
            arr2Pointer++;
        } else if (arr2[arr2Pointer] === undefined) {
            mergedArray.push(arr1[arr1Pointer]);
            arr1Pointer++;
        } else if (arr1[arr1Pointer] < arr2[arr2Pointer]) {
            mergedArray.push(arr1[arr1Pointer]);
            arr1Pointer++; //
        } else if (arr1[arr1Pointer] > arr2[arr2Pointer]) {
            mergedArray.push(arr2[arr2Pointer]);
            arr2Pointer++;
        } else if (arr1[arr1Pointer] === arr2[arr2Pointer]){
            mergedArray.push(arr1[arr1Pointer]);
            arr1Pointer++;
            mergedArray.push(arr2[arr2Pointer]);
            arr2Pointer++;
        };
    }
    console.log(mergedArray)
    if (mergedArray.length % 2 === 0) {
        let midPlusOne = Math.floor(mergedArray.length / 2);
        let midMinusOne = midPlusOne - 1;
        return (mergedArray[midPlusOne] + mergedArray[midMinusOne]) / 2;
    } else {
        let mid = Math.floor(mergedArray.length / 2);
        return mergedArray[mid];
    } 
}

console.log(medianOfMergedArrays(arr1, arr2))