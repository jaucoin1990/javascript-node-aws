// Given an array of integers nums and an integer target, 
//return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution,
//and you may not use the same element twice.

// You can return the answer in any order.

let arr1 = [-2, 1, 3, 5, 6, 8];

let target = 6; //matches would be 0,5 && 1,3


//target - array value to find looking-for-value (Check)
//loop through arr1 and store looking-for-value in object (Check)


let finder = function (arr1, target) {

    let lookingForObj = {};
    let matches = []

    arr1.forEach(function (item, index) {
        let lookingFor = target - item;
        
        if (lookingForObj[item] >= 0) {
            matches.push([lookingForObj[item], index])
        } else {
            lookingForObj[lookingFor] = index;

        }
    })
    return matches;
}

console.log(finder(arr1, target))


