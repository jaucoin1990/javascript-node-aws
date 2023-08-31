let arr1 = [2,9,34,43];
let arr2 = [3,4,5,9];

// let a = arr1.sort(function(a, b) {
//     return a - b
// })

// console.log(a)


let arraySort = function (arr1, arr2) {
    let array1Index = 0;
    let array2Index = 0;

    let array1Item = arr1[array1Index];
    let array2Item = arr2[array2Index];

    let newArray = [];

    if (arr1.length === 0 ) {
        return arr2;
    }

    if (arr2.length === 0 ) {
        return arr1;
    }

    while(array1Item || array2Item) {
        if (array1Item < array2Item || (array1Item && array2Item === undefined)) {
            newArray.push(array1Item)
            array1Index++
            array1Item = arr1[array1Index]
            
        }
        else if (array1Item > array2Item || (array2Item && array1Item === undefined)) { 
            newArray.push(array2Item)
            array2Index++
            array2Item = arr2[array2Index]
        }
        else {
            newArray.push(array1Item, array2Item)
            array1Index++
            array1Item = arr1[array1Index]
            array2Index++
            array2Item = arr2[array2Index]
        }

    }
    return newArray;
}

console.log(arraySort(arr1, arr2))
