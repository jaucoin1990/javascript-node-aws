let arr1 = [9,2,34,8];
let arr2 = [3,4,5,9];

// let a = arr1.sort(function(a, b) {
//     return a - b
// })

// console.log(a)


let array1Item = arr1[0];
let array2Item = arr2[0];

while(arr1 || arr2) {
    if (arr1.length === 0 ) {
        return arr2;
    }

    if (arr2.length === 0 ) {
        return arr1;
    }
}