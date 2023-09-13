//Write a recursive function called flatten which accepts an array of arrays 
//and returns a new array with all values flattened.

const arr = [[[[1], [[[2]]], [[[[[[[3]]]]]]]]]];

// function flatten(arr) {
//     const result = [];

//     function recursiveFlatten(subArray) {
//         for (let i = 0; i < subArray.length; i++) {
//             if (typeof subArray[i] === 'object') {
//                 // If the element is an array, recursively flatten it.
//                 recursiveFlatten(subArray[i]);
//             } else {
//                 // If the element is not an array, push it into the result array.
//                 result.push(subArray[i]);
//             }
//         }
//     }

//     // Start the recursion with the input array.
//     recursiveFlatten(arr);

//     return result;
// }

// console.log(flatten(arr))

const flatten = function (arr) {
    const newArr = [];

    const recursiveFlatten = function (subArray) {
        for (let i = 0; i < subArray.length; i++) {
            if (typeof subArray[i] === 'object') {
                recursiveFlatten(subArray[i])
            }
            else {
                newArr.push(subArray[i])
            }
        };
    };
    recursiveFlatten(arr);
    return newArr;
};

console.log(flatten(arr))